import { ReactElement, useEffect, useState } from "react";
import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";
import { BigPageNumber } from "../components/BigPageNumber";
import { NavPage } from "../components/NavPage";
import { BigSymbol } from "../components/BigSymbol";

export function Profile(): ReactElement {
    return (
        <div className="w-10/12 m-auto flex flex-col gap-10">
            <Header word="introduction" />
            <ProfileBody />
            <Footer word="end of introduction" />
        </div>
    );
}

function ProfileBody(): ReactElement {
    return (
        <>
            <Hero />
            <About />
        </>
    );
}

function Hero(): ReactElement {
    const [age, setAge] = useState(0);

    useEffect(() => {
        let currentDate = new Date().getFullYear();
        let birthDate = new Date("06-27-2003").getFullYear();

        setAge(currentDate - birthDate);
    }, []);

    // the body of Hero Element
    function HeroBody(): ReactElement {
        return (
            <div className="flex flex-row justify-between w-full">
                <BigPageNumber page={1} />
                <div className="flex flex-col gap-0 items-center">
                    <h1 className="font-sans text-8xl font-bold">.KURODOKE.</h1>
                    <h3 className="font-serif text-5xl">
                        {age}.Y/old(
                        <span className="italic">a man from bengkulu</span>)
                    </h3>
                </div>
                <BigPageNumber page={1} />
            </div>
        );
    }

    // the footer of Hero Element
    function HeroFooter(): ReactElement {
        return (
            <div className="flex flex-col items-center gap-1">
                <h3 className="font-sans text-4xl underline underline-offset-4">
                    HE IS A
                </h3>
                <nav className="flex flex-row gap-10">
                    <NavPage name={"designer"} page={2} url={"design"} />
                    <NavPage name={"developer"} page={3} url={"dev"} />
                </nav>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3 items-center">
            <h4 className="font-serif text-3xl">welcome to his portofolio</h4>
            <HeroBody />
            <HeroFooter />
        </div>
    );
}

function About(): ReactElement {
    function AboutText(): ReactElement {
        return (
            <h4 className="uppercase text-sm font-sans ">
                Arief Satrio Budi Prasojo, reowned as “<span className="underline underline-offset-2">Kurodoke</span>”, is a man that
                love design especially experimenting with typography and
                brutalism style<span style={{fontSize: 10}}>(02)</span> which he can combine to create a cool
                app<span style={{fontSize: 10}}>(03)</span>. Besides that, this man got highly interested in
                security and reversing a program such as game<span style={{fontSize: 10}}>(04)</span>.
            </h4>
        );
    }

    return (
        <div className="flex flex-row gap-10 items-center">
            <BigSymbol symbol="✷" />
            <BigSymbol symbol="✷" />
            <h5 className="font-sans text-xs">(about)</h5>
            <AboutText />
            <h5 className="font-sans text-xs">(about)</h5>
            <BigSymbol symbol="✷" />
            <BigSymbol symbol="✷" />
        </div>
    );
}
