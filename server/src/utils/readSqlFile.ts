import fs from 'fs';
import path from 'path';

export const readSqlFile = (file: string, filename: string) => {
    const filePath = path.join(__dirname, file, filename);
    return fs.readFileSync(filePath, 'utf8');
}
