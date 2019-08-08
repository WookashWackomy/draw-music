const notes = ["C", "Db", "D", "Eb", "F", "G", "Ab", "Bb"];
const colors = {
    C: "#BF4FA8",
    "C#": "#8064c6",
    Db: "#8064c6",
    D: "#4D61D8",
    "D#": "#ed3883",
    Eb: "#ed3883",
    E: "#45B5A1",
    F: "#95C631",
    "F#": "#f6be37",
    Gb: "#f6be37",
    G: "#EDD929",
    "G#": "#95c631",
    Ab: "#95c631",
    A: "#F7943D",
    "A#": "#45b5a1",
    Bb: "#45b5a1",
    B: "#E33159"
};

export const getColor = row => {
    const pitch = getPitch(row);
    return colors[pitch];
};

export const getPitch = row => {
    console.log(row % 7);
    return notes[row % 7];
};
