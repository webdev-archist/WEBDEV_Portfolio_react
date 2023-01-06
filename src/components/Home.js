import React from "react";
import ReactHtmlParser from 'react-html-parser';
//import css from "../assets/css/home.scss";
import Carousel from "./blocks/Carousel"
import Article from "./blocks/Article"



export default function Home(props) {

  return(
    <main id="home" className="">
      <h2>{ReactHtmlParser(props.data.slogan)}</h2>
      <Carousel data={props.data.diapo}/>
      <Article data={props.data.article}/>
    </main>
  )
}

