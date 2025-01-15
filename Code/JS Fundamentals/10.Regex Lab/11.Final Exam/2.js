function extractLocations(text) {
    let locationPattern = /([=\/])([A-Z][A-Za-z]{2,})\1/g;
    let validLocations = [];
    let match;
    
    while ((match = locationPattern.exec(text)) !== null) {
        validLocations.push(match[2]);
    }

    let travelPoints = validLocations.reduce((sum, location) => sum + location.length, 0);

    console.log(`Destinations: ${validLocations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
extractLocations("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
