function softUniReception(arr) {
    let employ1Help = Number(arr[0]);
    let employ2Help = Number(arr[1]);
    let employ3Help = Number(arr[2]);

    let totalStudentsHelperHour = employ1Help + employ2Help + employ3Help;

    let studentsCount = Number(arr[3]);

    let hour = 0;

    while (studentsCount > 0) {
        if (hour % 4 !== 0) {
            studentsCount -= totalStudentsHelperHour;
        }

        hour++;
    }

    console.log(`Time needed: ${hour - 1}h.`);

}

softUniReception(['5', '6', '4', '20']);