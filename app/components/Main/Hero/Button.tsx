interface ButtonProps {
    name: string;
    href: string;
    secondary?: boolean;
}

export default function Button({ name, href, secondary=false }: ButtonProps) {
    return (
        <a href={href} className={`flex flex-row items-center px-5 py-2 m-2 transition-all rounded-md group ${secondary ? "bg-transparent" : "bg-stone-200"} hover:bg-stone-300 ${secondary && "border-2 hover:bg-opacity-20 hover:border-stone-300 border-slate-900 border-opacity-70"}`}>
            <span className={`text-lg font-semibold leading-none md:text-xl ${secondary ? "text-stone-200" : "text-black"}`}>{name}</span>
            <span className="flex flex-row items-center justify-center w-8 transition-all group-hover:translate-x-1">
                <span className="flex justify-center w-8 transition-all group-hover:w-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={secondary ? "white" : "black"}
                        className="w-5 h-5"
                    >
                        <path 
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12l-14 0"
                            className="stroke-animation"
                        />
                    </svg>
                </span>
            </span>
        </a>
    );
}