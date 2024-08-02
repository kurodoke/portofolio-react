import { ReactElement } from "react";
import { PageBarrier, PageBarrierProps } from "../components/PageBarrier";

export function Footer(props: PageBarrierProps) : ReactElement{
    return (
        <div className="flex justify-between">
            <PageBarrier word={props.word}/>
        </div>
    )
}