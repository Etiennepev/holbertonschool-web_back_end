// 2-read_file.js
const fs = require('fs');
function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf8');
    const lines = fileContent.trim().split('\n');

    const studentLines = lines.slice(1);

    let totalStudents = 0;
    const studentsByField = {};

    for (const line of studentLines) {
      if (line.trim() === '') continue;

      const parts = line.split(',');
      const firstName = parts[0];
      const field = parts[3];

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
      totalStudents += 1;
    }

    console.log(`Number of students: ${totalStudents}`);
    for (const field in studentsByField) {
      const list = studentsByField[field].join(', ');
      const count = studentsByField[field].length;
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
