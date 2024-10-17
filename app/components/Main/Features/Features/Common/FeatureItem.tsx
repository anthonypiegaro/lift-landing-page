interface FeatureItemProps {
    feature: string;
}

export default function FeatureItem({ feature }: FeatureItemProps) {
    return (
        <div className="flex flex-row items-center px-6 py-4 m-6 font-lg semibold text- rounded-xl bg-zinc-900 gap-x-3 md:text-xl lg:text-2xl">
            <div className="p-1 bg-green-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="rgb(24 24 27)" className="size-6 md:size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
            </div>
            {feature}
        </div>
    )
}