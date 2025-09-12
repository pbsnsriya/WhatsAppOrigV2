import { JSONFilePreset } from 'lowdb/node'

import Whatsapp from 'whatsapp-web.js';
const { MessageMedia } = Whatsapp;

import { getClientInfo } from "../CommonExpose/clientInfo.js";
import { StartFunc as StartFuncFromInsertToFile } from "./insertToFile.js";
import fs from 'fs';
import path from 'path';

// Helper function to get message data from JSON
const getMessageData = (key, category = 'responses') => {
    try {
        const messagesPath = path.join(process.cwd(), 'Data', 'messages.json');
        const messagesData = JSON.parse(fs.readFileSync(messagesPath, 'utf8'));
        
        if (category === 'responses' && messagesData.responses[key]) {
            return messagesData.responses[key];
        } else if (category === 'media' && messagesData.media[key]) {
            return messagesData.media[key];
        } else if (category === 'customMessages' && messagesData.customMessages[key]) {
            return messagesData.customMessages[key];
        }
        
        return null;
    } catch (error) {
        console.error('Error reading messages.json:', error);
        return null;
    }
};

// Helper function to get all available commands from JSON
const getAllCommands = () => {
    try {
        const messagesPath = path.join(process.cwd(), 'Data', 'messages.json');
        const messagesData = JSON.parse(fs.readFileSync(messagesPath, 'utf8'));
        
        const commands = {
            responses: Object.keys(messagesData.responses || {}),
            media: Object.keys(messagesData.media || {}),
            customMessages: Object.keys(messagesData.customMessages || {})
        };
        
        return commands;
    } catch (error) {
        console.error('Error reading messages.json:', error);
        return { responses: [], media: [], customMessages: [] };
    }
};

// Helper function to check if a message matches any command
const getCommandType = (messageBody) => {
    const commands = getAllCommands();
    
    if (commands.responses.includes(messageBody)) {
        return 'responses';
    } else if (commands.media.includes(messageBody)) {
        return 'media';
    } else if (commands.customMessages.includes(messageBody)) {
        return 'customMessages';
    }
    
    return null;
};

const StartFunc = async msg => {
    const defaultData = [];
    const LocalFromNumber = msg.from;
    const timestamp = msg.timestamp;

    await StartFuncFromInsertToFile({
        inFrom: LocalFromNumber,
        inMessage: msg.body,
        inTimeStamp: timestamp
    });

    const LocalNumbersData = await JSONFilePreset('Data/mobiles.json', defaultData);

    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
    const formattedDate = date.toLocaleString(); // Or use a different format as needed

    // console.log("formattedDate : ", formattedDate);

    if (LocalFromNumber in LocalNumbersData.data) {
        const LocalClientInfo = getClientInfo();

        LocalClientInfo.sendMessage(msg.from, LocalNumbersData.data[LocalFromNumber]).then(PromiseData => {
        });
    } else {
        const messageBody = msg.body;
        const commandType = getCommandType(messageBody);
        
        if (!commandType) {
            // Handle unknown commands
            const errorData = getMessageData('error', 'customMessages');
            if (errorData && errorData.type === 'text') {
                msg.reply(errorData.content);
            } else {
                msg.reply('Sorry, I didn\'t understand that command. Type \'help\' for available options.');
            }
            return;
        }
        
        // Handle responses
        if (commandType === 'responses') {
            const responseData = getMessageData(messageBody, 'responses');
            if (responseData && responseData.type === 'text') {
                if (messageBody === 'Button') {
                    // Special handling for Button command
                    const LocalClientInfo = getClientInfo();
                    LocalClientInfo.sendMessage(msg.from, responseData.content).then(PromiseData => {
                        console.log('Button message sent successfully');
                    }).catch(error => {
                        console.error('Error sending button message:', error);
                    });
                } else {
                    // Regular text response
                    msg.reply(responseData.content);
                }
            } else {
                // Fallback for responses
                const fallbackMessages = {
                    'ping': 'ping ping',
                    'hi': 'Greetings from KeshavSoft',
                    'Button': 'Send Button'
                };
                if (fallbackMessages[messageBody]) {
                    if (messageBody === 'Button') {
                        const LocalClientInfo = getClientInfo();
                        LocalClientInfo.sendMessage(msg.from, fallbackMessages[messageBody]).then(PromiseData => {
                            console.log('Fallback button message sent');
                        });
                    } else {
                        msg.reply(fallbackMessages[messageBody]);
                    }
                }
            }
        }
        
        // Handle media commands
        if (commandType === 'media') {
            const mediaData = getMessageData(messageBody, 'media');
            if (mediaData) {
                try {
                    if (mediaData.type === 'file') {
                        const media = MessageMedia.fromFilePath(mediaData.path);
                        await msg.reply(media);
                    } else if (mediaData.type === 'url') {
                        const media = await MessageMedia.fromUrl(mediaData.url);
                        await msg.reply(media);
                    }
                } catch (error) {
                    console.error(`Error sending media for ${messageBody}:`, error);
                    msg.reply('Sorry, there was an error sending the media.');
                }
            } else {
                // Fallback for media
                try {
                    if (messageBody === 'SendMedia') {
                        const media = MessageMedia.fromFilePath('./WA/path/to/Keshav.png');
                        await msg.reply(media);
                    } else if (messageBody === 'SendFromUrl') {
                        const LocalMediaUrl = "https://washtex5.keshavsoft.com/assets/image%20(1)-Bo3S5UVn.png";
                        const media = await MessageMedia.fromUrl(LocalMediaUrl);
                        await msg.reply(media);
                    }
                } catch (error) {
                    console.error(`Error sending fallback media for ${messageBody}:`, error);
                    msg.reply('Sorry, there was an error sending the media.');
                }
            }
        }
        
        // Handle custom messages
        if (commandType === 'customMessages') {
            const customData = getMessageData(messageBody, 'customMessages');
            if (customData && customData.type === 'text') {
                msg.reply(customData.content);
            } else {
                // Fallback for custom messages
                const fallbackCustomMessages = {
                    'help': 'Available commands: ping, hi, Button, SendMedia, SendFromUrl, help',
                    'welcome': 'Welcome to our WhatsApp service! How can I help you today?'
                };
                if (fallbackCustomMessages[messageBody]) {
                    msg.reply(fallbackCustomMessages[messageBody]);
                }
            }
        }
    };
};

const LocalFuncFetchData = async (inNumber) => {
    const LocalUrl = `https://join.keshavsoft.biz/binV4/StudentNames/Search?Mobile=${inNumber}`;

    const response = await fetch(LocalUrl);
    const data = await response.json();
    return data;
};

export { StartFunc };