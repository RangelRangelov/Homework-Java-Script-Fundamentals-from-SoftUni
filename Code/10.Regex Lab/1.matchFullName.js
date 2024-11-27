function matchFullNames(names) {
    const regex = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
    const matches = names.match(regex);
    console.log(matches.join(' '));
}
matchFullNames("Ivan Ivanov, ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov");
