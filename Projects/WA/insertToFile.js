import { JSONFilePreset } from 'lowdb/node'

const StartFunc = async ({ inMessage, inFrom, inTimeStamp }) => {
    const defaultData = { posts: [], oldChats: [] };
    const timestamp = inTimeStamp;

    const LocalFromNumber = inFrom;
    const LocalFileName = LocalFromNumber.split(".")[0];

    // console.log("inFrom : ", LocalFileName, inFrom, inMessage);

    const LocalMessage = inMessage;

    const db = await JSONFilePreset(`Data/${LocalFileName}.json`, defaultData);

    await db.update(({ posts }) => posts.push({
        MessageRec: LocalMessage,
        timestamp: timestamp
    }));
};

export { StartFunc };