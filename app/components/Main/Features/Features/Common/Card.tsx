interface CardProps {
    children?: React.ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <div className="w-full max-w-xl px-8 py-12 shadow-lg rounded-2xl bg-gradient-to-r from-zinc-800 to-zinc-600">
            {children}
        </div>
    )
}