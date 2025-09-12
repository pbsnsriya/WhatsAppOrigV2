import path from 'path';
import { fileURLToPath } from 'url';

let StartFunc = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const file = path.join(__dirname, "..");

    return file;
};

export { StartFunc };
