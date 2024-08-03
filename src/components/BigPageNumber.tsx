import { ReactElement } from "react";

interface BigPageNumberProps {
    page: number;
}

export function BigPageNumber(props: BigPageNumberProps): ReactElement {
    const data: string =
        props.page >= 10 ? props.page.toString() : "0" + props.page;

    return (<h1 className="font-sans text-6xl font-bold">({data})</h1>)
}
