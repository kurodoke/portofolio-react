import { ReactElement } from "react";
import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";

export function Profile() : ReactElement{
    return (
        <div className="w-10/12 m-auto">
            <Header word="introduction"/>
            <ProfileBody/>
            <Footer word="end of introduction"/>
        </div>
    );
}

function ProfileBody() : ReactElement{
    return (
        <><h1></h1></>
    )
}
