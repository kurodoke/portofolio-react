import { ReactElement, useEffect, useState } from "react";
import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";
import { BigPageNumber } from "../components/BigPageNumber";
import { NavPage } from "../components/NavPage";
import { BigSymbol } from "../components/BigSymbol";

export function Profile(): ReactElement {
    return (
        <div className="w-10/12 m-auto flex flex-col gap-6 lg:gap-10">
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
            <div className="flex justify-between w-auto sm:w-full flex-col sm:flex-row items-center sm:items-start">
                <BigPageNumber page={1} className="text-2xl sm:text-4xl hidden sm:block self-start sm:self-auto mb-2 sm:mb-auto md:text-5xl lg:text-6xl order-1 sm:order-1"/>
                <div className="flex flex-col gap-0 items-center order-1 sm:order-2">
                    <h1 className="font-sans font-bold text-5xl sm:text-5xl md:text-6xl lg:text-8xl">.KURODOKE.</h1>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                        {age}.Y/old(
                        <span className="italic">a man from bengkulu</span>)
                    </h3>
                </div>
                <BigPageNumber page={1} className="text-sm self-end sm:self-auto sm:text-4xl md:text-5xl lg:text-6xl order-3 sm:order-3"/>
            </div>
        );
    }

    // the footer of Hero Element
    function HeroFooter(): ReactElement {
        return (
            <div className="flex flex-col items-center gap-1">
                <h3 className="font-sans underline underline-offset-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    HE IS A
                </h3>
                <nav className="flex flex-row gap-10">
                <h4 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl">☛</h4>
                    <NavPage name={"designer"} page={2} url={"design"} />
                    <NavPage name={"developer"} page={3} url={"dev"} />
                <h4 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl">☚</h4>
                </nav>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3 items-center h-screen sm:h-auto">
            <h4 className="font-serif text-2xl sm:text-3xl">welcome to his portofolio</h4>
            <HeroBody />
            <HeroFooter />
        </div>
    );
}

function About(): ReactElement {
    function AboutText(): ReactElement {
        return (
            <h4 className="text-justify font-sans text-sm md:text-lg">
                Arief Satrio Budi Prasojo, also known as “<span className="underline underline-offset-2 uppercase">Kurodoke</span>” is a guy
                who absolutely loves design, especially experimenting with
                typography and brutalism <span style={{ fontSize: 10 }}>(02)</span>. He can mix it all together to create
                some seriously cool apps<span style={{ fontSize: 10 }}>(03)</span>. Besides that, he's really into
                security and reverse engineering, like tweaking game programs or making server for the game<span style={{ fontSize: 10 }}>(04)</span>.
            </h4>
        );
    }

    return (
        <div className="flex flex-row gap-5 md:gap-10 items-center">
            <BigSymbol symbol="✷" className="hidden lg:block"/>
            <BigSymbol symbol="✷" className="hidden xl:block"/>
            <h5 className="font-sans text-xs hidden sm:block">(about)</h5>
            <AboutText />
            <h5 className="font-sans text-xs hidden sm:block">(about)</h5>
            <BigSymbol symbol="✷" className="hidden xl:block"/>
            <BigSymbol symbol="✷" className="hidden lg:block"/>
        </div>
    );
}
