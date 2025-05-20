import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const fields = {};

        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line) {
            const parts = line.split(',');
            const field = parts[parts.length - 1];
            const firstName = parts[0];
            if (!fields[field]) fields[field] = [];
            fields[field].push(firstName);
          }
        }
        resolve(fields);
      }
    });
  });
}
