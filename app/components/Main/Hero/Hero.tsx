import Button from "./Button"

export default function Hero() {
    return (
        <section className="flex flex-col justify-center w-full py-20 bg-gradient-to-t from-yellow-600 to-75% md:py-30 lg:py-40">
            <div className="self-center inline px-3 mx-auto mb-4 text-center text-yellow-600 border-2 border-yellow-600 rounded-3xl md:mb-4 lg:mb-6">
                lift labs
            </div>
            <h1 className="px-3 mb-4 text-3xl font-bold text-center md:mb-4 md:text-5xl md:px-6 lg:mb-6 lg:text-6xl lg:px-16">
                Your advanced training made simple
            </h1>
            <p className="self-center max-w-xl px-4 mb-4 font-medium text-center text-zinc-400 md:max-w-2xl md:text-lg lg:text-xl">
                Get started building, tracking, and analyzing your fitness goals
                with a streamlined, all-in-one platform. Our app simplifies program
                creation and performance tracking, so you can focus on reaching 
                your peak potential.
            </p>
            <div className="flex flex-col items-center md:flex-row md:justify-center">
                <Button name="Waitlist" href="#waitlist" />
                <Button name="Contact" href="#contact" secondary={true} />
            </div>
        </section>
    )
}