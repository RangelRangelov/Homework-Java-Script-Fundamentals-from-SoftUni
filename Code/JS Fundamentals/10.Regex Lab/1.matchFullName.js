function matchFullNames(str) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
    let matches = str.match(regex);
    console.log(matches.join(' '));
}
matchFullNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
