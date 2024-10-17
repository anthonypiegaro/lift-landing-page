import Build from "./Features/Build";
import Track from "./Features/Track";
import Analyze from "./Features/Analyze";

export default function Features() {
    return (
        <section id="features">
            <Build />
            <Track />
            <Analyze />
        </section>
    )
}