import fs from 'fs';
import path from 'path';

export function readSqlFile(filename: string) {
    const filePath = path.join(__dirname, 'chatRepository', filename);
    return fs.readFileSync(filePath, 'utf8');
}
