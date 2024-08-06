import { ReactElement } from "react";

export interface PageBarrierProps {
    word: string;
}

export function PageBarrier(props: PageBarrierProps) : ReactElement{
    return (
        <>
            <h5 className="font-sans text-base lg:text-xl md:text-lg">A./{props.word}</h5>
            <h5 className="font-sans text-base hidden lg:text-xl md:text-lg sm:block">&</h5>
            <h5 className="font-sans text-base hidden lg:text-xl md:text-lg sm:block">B./portofolio</h5>
            <h5 className="font-sans text-base hidden lg:text-xl md:text-lg sm:block">./of</h5>
            <h5 className="font-serif text-base lg:text-xl md:text-lg">✹</h5>
            <h5 className="font-sans text-base lg:text-xl md:text-lg">(kurodoke)</h5>
            <h5 className="font-serif text-base lg:text-xl md:text-lg">✹</h5>
            <h5 className="font-sans text-base hidden lg:text-xl md:text-lg sm:block">./of</h5>
            <h5 className="font-sans text-base hidden lg:text-xl md:text-lg sm:block">B./portofolio</h5>
            <h5 className="font-sans text-base hidden lg:text-xl md:text-lg sm:block">&</h5>
            <h5 className="font-sans text-base lg:text-xl md:text-lg">A./{props.word}</h5>
        </>
    );
}
