function calculateBonusPoints(input) {
    let numberOfStudents = Number(input[0]);
    let numberOfLectures = Number(input[1]);
    let additionalBonus = Number(input[2]);
    
    let maxBonus = 0;
    let maxAttendance = 0;

    for (let i = 3; i < input.length; i++) {
        let attendance = Number(input[i]);
        let totalBonus = (attendance / numberOfLectures) * (5 + additionalBonus);
        
        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            maxAttendance = attendance;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}

// Example usage
calculateBonusPoints([
    '5',    // Number of students
    '25',   // Number of lectures
    '30',   // Additional bonus
    '12',   // Attendances of student 1
    '19',   // Attendances of student 2
    '24',   // Attendances of student 3
    '16',   // Attendances of student 4
    '20'    // Attendances of student 5
]);
