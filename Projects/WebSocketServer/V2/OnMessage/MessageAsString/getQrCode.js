import { GetQrCodeGenerated } from "../../../../../CommonExpose/qrCodeGenerated.js";

let StartFunc = ({ inSendFunc, inws }) => {
    inSendFunc({
        inTypeJson: false,
        inMessage: "wAProfile"
    });
    // const LocalClientInfo = readFunc();
    const LocalQrCodeGenerated = GetQrCodeGenerated();

    // inws.send(LocalQrCodeGenerated);
    inSendFunc({ inMessage: { Type: 'QrCodeGenerated', res: LocalQrCodeGenerated }, inTypeJson: true });
};

export { StartFunc };