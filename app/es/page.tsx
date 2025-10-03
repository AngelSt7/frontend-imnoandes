import { ActionButtonOrquest, Discover, Features, NavigationCard, Stats } from "@/src/features/property/public/subfeatures"

export default function page() {
    return (
        <div className=" mt-4 w-[92%] max-w-[1400px] mx-auto rounded-xl font-semibold  p-2">
            <ActionButtonOrquest defaultTab={1} />
            <NavigationCard />
            <Features />
            <Discover /> 
            <Stats />
        </div>
    )
}