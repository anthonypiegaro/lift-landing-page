import Hero from "./Hero/Hero"
import LogoTicker from "./LogoTicker/LogoTicker"
import Contact from "./Contact/Contact";

export default function Main() {
    return (
        <main className="w-full">
            <Hero />
            <LogoTicker />
            <Contact />
        </main>
    )
}