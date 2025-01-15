function modernTimesOfHashTag(text) {
    let hashtags = text.split(' ').filter(word => word.startsWith('#') && word.length > 1);

    for (let hastag of hashtags) {
        hastag = hastag.substring(1);
        let pattern = /^[A-Za-z]+$/;

        if (pattern.test(hastag)) {
            console.log(hastag);
        }
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');