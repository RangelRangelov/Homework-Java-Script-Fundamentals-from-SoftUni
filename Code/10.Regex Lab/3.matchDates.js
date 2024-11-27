function matchDates(text) {
    let regex = /(?<day>\d{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;
    let str = text[0];

    let matches = Array.from(str.matchAll(regex));

    for (const match of matches) {
        console.log(`Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`);
    }
}

matchDates("13/Jul/1928, 10-Nov-1934, 25.Dec.1937, 01/Jan-1951, 23/sept/1973, 1/Feb/2016");
