import Voicing from "../music/voicing";
import Chord from "../music/chord";

export default interface Instrument {
    GenerateVoicings(chord: Chord): Voicing[];
}