const fs = require('fs');

function countStudents(path) {
  return fs.promises.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const students = {};
      let total = 0;

      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i].trim();
        if (!line) continue;

        const parts = line.split(',');
        const firstName = parts[0];
        const field = parts[parts.length - 1];

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
        total += 1;
      }

      let result = `Number of students: ${total}`;
      for (const field in students) {
        if (Object.prototype.hasOwnProperty.call(students, field)) {
          const list = students[field].join(', ');
          result += `\nNumber of students in ${field}: ${students[field].length}. List: ${list}`;
        }
      }

      return result;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
