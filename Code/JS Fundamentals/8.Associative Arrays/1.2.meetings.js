function manageMeetings(input) {
    let meetings = {};

    input.forEach(entry => {
        let [day, name] = entry.split(' ');

        if (meetings[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });

    for (let day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }
}

manageMeetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);
// Output:
// Scheduled for Monday
// Scheduled for Wednesday
// Conflict on Monday!
// Scheduled for Friday
// Monday -> Peter
// Wednesday -> Bill
// Friday -> Tim

manageMeetings([
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);
// Output:
// Scheduled for Friday
// Scheduled for Saturday
// Scheduled for Monday
// Conflict on Monday!
// Scheduled for Wednesday
// Friday -> Bob
// Saturday -> Ted
// Monday -> Bill
// Wednesday -> George
