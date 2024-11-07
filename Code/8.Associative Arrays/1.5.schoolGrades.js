function manageStudentGrades(input) {
    let students = {};

    input.forEach(entry => {
        let [name, ...grades] = entry.split(' ');
        grades = grades.map(Number);

        if (students[name]) {
            students[name] = students[name].concat(grades);
        } else {
            students[name] = grades;
        }
    });

    let sortedNames = Object.keys(students).sort((a, b) => a.localeCompare(b));

    sortedNames.forEach(name => {
        let averageGrade = students[name].reduce((acc, grade) => acc + grade, 0) / students[name].length;
        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    });
}

manageStudentGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);
// Output:
// Lilly: 5.25
// Tammy: 3.00
// Tim: 5.75

manageStudentGrades([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
]);
// Output:
// George: 5.00
// Steven: 4.50
// Tammy: 3.33
