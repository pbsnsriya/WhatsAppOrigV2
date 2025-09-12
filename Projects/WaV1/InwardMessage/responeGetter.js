import Whatsapp from 'whatsapp-web.js';
const { MessageMedia } = Whatsapp;

import { getClientInfo } from "../../../CommonExpose/clientInfo.js";

// Main function to get response from a response object based on message body
const getResponseFromObject = async (messageBody, msg, responseObject) => {
    try {
        // Check all categories for the command
        const categories = ['responses', 'media', 'customMessages', 'interactive', 'templates'];
        
        for (const category of categories) {
            if (responseObject[category] && responseObject[category][messageBody]) {
                const commandData = responseObject[category][messageBody];
                
                if (commandData.type === 'text') {
                    if (messageBody === 'Button') {
                        // Special handling for Button command
                        const LocalClientInfo = getClientInfo();
                        try {
                            await LocalClientInfo.sendMessage(msg.from, commandData.content);
                            return { type: 'button', content: 'Button message sent successfully', sent: true };
                        } catch (error) {
                            console.error('Error sending button message:', error);
                            return { type: 'error', content: 'Error sending button message' };
                        }
                    } else {
                        return { type: 'text', content: commandData.content };
                    }
                } else if (commandData.type === 'file') {
                    try {
                        const media = MessageMedia.fromFilePath(commandData.path);
                        return { type: 'media', media: media, source: 'file' };
                    } catch (error) {
                        console.error('Error preparing file media:', error);
                        return { type: 'error', content: 'Error preparing media file' };
                    }
                } else if (commandData.type === 'url') {
                    try {
                        const media = await MessageMedia.fromUrl(commandData.url);
                        return { type: 'media', media: media, source: 'url' };
                    } catch (error) {
                        console.error('Error preparing URL media:', error);
                        return { type: 'error', content: 'Error preparing media from URL' };
                    }
                }
            }
        }
        
        // Command not found in the response object
        const errorData = responseObject.customMessages?.error || { content: 'Sorry, I didn\'t understand that command. Type \'help\' for available options.' };
        return { type: 'text', content: errorData.content };
        
    } catch (error) {
        console.error('Error getting response from object:', error);
        return { type: 'error', content: 'Sorry, there was an error processing your request.' };
    }
};

// Function to send response based on type
const sendResponse = async (response, msg) => {
    try {
        switch (response.type) {
            case 'text':
                await msg.reply(response.content);
                return true;
            
            case 'media':
                await msg.reply(response.media);
                return true;
            
            case 'button':
                // Button messages are already sent by getResponseFromObject
                console.log(response.content);
                return true;
            
            case 'error':
                await msg.reply(response.content);
                return false;
            
            default:
                await msg.reply('Sorry, there was an error processing your request.');
                return false;
        }
    } catch (error) {
        console.error('Error sending response:', error);
        await msg.reply('Sorry, there was an error sending the response.');
        return false;
    }
};

export { getResponseFromObject, sendResponse };
