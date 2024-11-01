function filterSongs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = parseInt(input[0]);
    let songs = [];
    let filterType = input[input.length - 1];

    for (let i = 1; i <= numberOfSongs; i++) {
        let [typeList, name, time] = input[i].split('_');
        songs.push(new Song(typeList, name, time));
    }

    let filteredSongs = songs.filter(song => filterType === 'all' || song.typeList === filterType);

    for (let song of filteredSongs) {
        console.log(song.name);
    }
}

filterSongs([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);
