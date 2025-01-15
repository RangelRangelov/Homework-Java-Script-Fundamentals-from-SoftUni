function processCrystal(target, crystals) {
    function transportAndWash(crystal) {
        console.log("Transporting and washing");
        return Math.floor(crystal);
    }

    for (let i = 0; i < crystals.length; i++) {
        let crystal = crystals[i];
        console.log("Processing chunk " + crystal + " microns");

        // Cut operation
        let cuts = 0;
        while (crystal / 4 >= target) {
            crystal /= 4;
            cuts++;
        }
        if (cuts > 0) {
            console.log("Cut x" + cuts);
            crystal = transportAndWash(crystal);
        }

        // Lap operation
        let laps = 0;
        while (crystal * 0.8 >= target) {
            crystal *= 0.8;
            laps++;
        }
        if (laps > 0) {
            console.log("Lap x" + laps);
            crystal = transportAndWash(crystal);
        }

        // Grind operation
        let grinds = 0;
        while (crystal - 20 >= target) {
            crystal -= 20;
            grinds++;
        }
        if (grinds > 0) {
            console.log("Grind x" + grinds);
            crystal = transportAndWash(crystal);
        }

        // Etch operation
        let etches = 0;
        while (crystal - 2 >= target - 1) {
            crystal -= 2;
            etches++;
        }
        if (etches > 0) {
            console.log("Etch x" + etches);
            crystal = transportAndWash(crystal);
        }

        // X-ray operation
        if (crystal < target) {
            crystal++;
            console.log("X-ray x1");
        }

        // Finished processing
        console.log("Finished crystal " + crystal + " microns");
    }
}

// Example usage
processCrystal(1375, [50000]);