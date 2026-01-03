const fs = require('fs').promises;
const path = require('path');

const now = new Date().toLocaleString('en-US');

const logbook = async (pathFile) => {
    try {
        if (await fileExists(pathFile)) {
            await append();
        } else {
            await write();
        }

        await read();

    } catch {
        console.log("error");
    }
};

const fileExists = async (pathFile) => {
    try {
        await fs.access(pathFile);
        return true;
    } catch {
        return false;
    }
};

const write = async () => {
    await fs.writeFile('logbook.txt', now);
    console.log('File created!');
};

const append = async () => {
    await fs.appendFile('logbook.txt', "\n" + now);
};

const read = async () => {
    const content = await fs.readFile('logbook.txt', 'utf8');
    console.log(content);
};

logbook("./logbook.txt");