function towns(arr) {
    for (const townInfo of arr) {
        let [town, latitude, longitude] = townInfo.split(" | ");
        latitude = Number(latitude);
        longitude = Number(longitude);

        let townObj = {
            town: town,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        };

        console.log(townObj);
    }   
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);