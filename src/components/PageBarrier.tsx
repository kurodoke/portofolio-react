import { ReactElement } from "react";

export interface PageBarrierProps {
    word: string;
}

export function PageBarrier(props: PageBarrierProps) : ReactElement{
    return (
        <>
            <h5 className="font-sans font-normal text-xl">A./{props.word}</h5>
            <h5 className="font-sans font-normal text-xl">&</h5>
            <h5 className="font-sans font-normal text-xl">B./portofolio</h5>
            <h5 className="font-sans font-normal text-xl">./of</h5>
            <h5 className="font-serif font-normal text-xl">✹</h5>
            <h5 className="font-sans font-normal text-xl">(kurodoke)</h5>
            <h5 className="font-serif font-normal text-xl">✹</h5>
            <h5 className="font-sans font-normal text-xl">./of</h5>
            <h5 className="font-sans font-normal text-xl">portofolio</h5>
            <h5 className="font-sans font-normal text-xl">&</h5>
            <h5 className="font-sans font-normal text-xl">{props.word}</h5>
        </>
    );
}
