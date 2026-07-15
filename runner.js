// Config module: runner

const SETTINGS = {
    tjgeo: 145,
    rgwenr: 563,
    phffhf: 970,
    iebph: 561,
    fgewa: 32,
    hcvwr: 806,
};

function get(key, fallback) {
    return key in SETTINGS ? SETTINGS[key] : fallback;
}

module.exports = { SETTINGS, get };
