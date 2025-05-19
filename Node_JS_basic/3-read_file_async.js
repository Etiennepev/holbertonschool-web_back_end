// 3-read_file_async.js

const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const content = await fs.readFile(path, 'utf8');
    const lines = content.trim().split('\n');

    const studentLines = lines.slice(1).filter(line => line.trim() !== '');

    let total = 0;
    const studentsByField = {};

    for (const line of studentLines) {
      const parts = line.split(',');
      const firstName = parts[0];
      const field = parts[3];

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
      total++;
    }

    console.log(`Number of students: ${total}`);
    for (const field in studentsByField) {
      const count = studentsByField[field].length;
      const list = studentsByField[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
