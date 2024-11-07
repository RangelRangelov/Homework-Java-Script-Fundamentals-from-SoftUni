function companyUsers(arr) {
    let companyEmployees = {};

    for (const command of arr) {
        let [company, userId] = command.split(' -> ');

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(userId)) {
                companyEmployees[company].push(userId);
            }
        } else {
            companyEmployees[company] = [userId];
        }
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [company, users] of entries) {
        console.log(company);
        for (const id of users) {
            console.log(`-- ${id}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
