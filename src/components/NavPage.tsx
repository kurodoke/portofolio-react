import { ReactElement } from "react";

interface NavPageProps {
    name: string;
    page: number;
    url: string;
}

export function NavPage(props: NavPageProps): ReactElement {
    const data: string =
        props.page >= 10 ? props.page.toString() : "0" + props.page;

    return (
        <a className="flex flex-col gap-0 justify-center items-center font-sans" href={props.url}>
            <p className="text-2xl text-blue-500 hover:text-blue-900 transition-all">[{props.name.toLocaleLowerCase()}]</p>
            <p className="text-xs">({data})</p>
        </a>
    );
}
