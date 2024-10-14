interface LinkProps {
    name: string;
    href: string;
}

export default function Link({ name, href }: LinkProps) {
    return (
        <li className="flex flex-col items-center group">
            <a 
                className="px-4 mb-0.5 text-base tracking-wide text-white transition-all font-mona md:text-lg lg:text-xl group-hover:text-blue-500"
                href={href}
            >
                {name}
            </a>
            <span className="w-0 h-px transition-all bg-white group-hover:w-2/5 group-hover:bg-blue-400"/>
        </li>
    )
}