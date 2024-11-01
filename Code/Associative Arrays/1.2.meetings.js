function manageMeetings(input) {
    let meetings = {};

    input.forEach(entry => {
        let [day, name] = entry.split(' ');
        meetings[day] = name;
    });

    for (let day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }
}

manageMeetings(['Monday Peter', 'Tuesday Bill', 'Monday Tim', 'Wednesday Sarah']);
