export default function createReportObject(employeesList) {
  const allEmployees = {};
  // eslint-disable-next-line
  for (const department in employeesList) {
    allEmployees[department] = employeesList[department];
  }
  return {
    allEmployees: {...employeesList },
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    },
  };
}
