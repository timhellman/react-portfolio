import React from "react";
import "./About.css";
import timImage from "../components/img/timpolaroidzoomed.jpeg";


export default () => {
    return <main id="about">
    <h1>About Me</h1>
    <img src={timImage} className="timImage"/>
    <p>I'm a freelance, front-end web developer from Los Angeles</p>
    </main>
}