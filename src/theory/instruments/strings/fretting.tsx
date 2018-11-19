export default class Fretting {
    // NECK SPECIFIC
    public frets: number[]; // fret numbers, indexed by the string! -1 is not fretted!

    constructor(frets: number[]) {
        this.frets = frets;
    }
}