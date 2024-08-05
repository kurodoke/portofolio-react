import { ReactElement } from "react";

interface BigSymbolProps {
    symbol: string;
}

export function BigSymbol(props: BigSymbolProps): ReactElement {
    return (
        <>
            <h1 className="font-serif text-6xl">{props.symbol}</h1>
        </>
    );
}
