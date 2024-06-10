function showFlavorCount() {
    const input = document.getElementById('flavorInput').value;
    const flavors = input.split(',').map(flavor => flavor.trim());
    const flavorCount = {};

    flavors.forEach(flavor => {
        if (flavorCount[flavor]) {
            flavorCount[flavor]++;
        } else {
            flavorCount[flavor] = 1;
        }
    });

    console.table(flavorCount);
}