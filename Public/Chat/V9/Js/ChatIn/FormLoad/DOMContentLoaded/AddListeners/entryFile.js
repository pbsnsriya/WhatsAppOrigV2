import { StartFunc as StartFuncAddUserId } from "./AddUserId/entryFile.js";
import { StartFunc as StartFuncChangeNameId } from "./ChangeNameId/entryFile.js";
import { StartFunc as StartFuncShowUsersId } from "./ShowUsersId/entryFile.js";
import { StartFunc as StartFuncFromShowChatId } from './ShowChatId/entryFile.js';
import { StartFunc as StartFuncFromSendButtonId } from './SendButtonId/EntryFile.js';

let StartFunc = () => {
    StartFuncAddUserId();
    StartFuncChangeNameId();
    StartFuncShowUsersId();
    StartFuncFromShowChatId();
	StartFuncFromSendButtonId();
};

export { StartFunc };