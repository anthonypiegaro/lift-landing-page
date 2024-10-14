import Link from "./Link";

export default function Header() {
    return (
        <header className="w-full">
            <nav className="w-full" aria-label="Main Navigation">
                <ul className="flex flex-row justify-center w-full py-3 md:py-4 lg:py-6">
                    <Link name="lift" href="#lift" />
                    <Link name="features" href="#features" />
                    <Link name="waitlist" href="#waitlist" />
                    <Link name="contact" href="#contact" />
                </ul>
            </nav>
        </header>
    )
}