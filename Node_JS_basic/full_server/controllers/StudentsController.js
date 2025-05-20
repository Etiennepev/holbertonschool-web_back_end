import { readDatabase } from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    const dbPath = process.argv[2];
    readDatabase(dbPath)
      .then((data) => {
        const lines = ['This is the list of our students'];
        const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        for (const field of fields) {
          lines.push(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
        }

        res.status(200).send(lines.join('\n'));
      })
      .catch((err) => res.status(500).send(err.message));
  }

  static getAllStudentsByMajor(req, res) {
    const dbPath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(dbPath)
      .then((data) => {
        const students = data[major];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch((err) => res.status(500).send(err.message));
  }
}

export default StudentsController;
