import React from 'react'
import {
  Link
} from "react-router-dom";

let pathname = window.location.hostname.indexOf("github") !== -1 ? window.location.pathname : ""
export default function Header({data,routes,lang}){
  console.log("_______");
  console.log({});
  console.log(routes);
  console.log("_______");
  return(
    <header id="header" className="container-fluid row navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light text-primary">
      <Link id="link_home" className="col-1 navbar-brand" to={pathname}><i className="material-icons icon-image-preview">home</i></Link>
      {lang==="jp"?<a className="link_lang" style={{position:"absolute",left:"6em"}} href={"/"}>🇬🇧</a>:<a className="link_lang" style={{position:"absolute",left:"6em"}} href={"/jp"}>🇯🇵</a>}
      <h1>{data.slogan}</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="col-md-3 collapse navbar-collapse" id="navbarNav">
        <menu id="menu" className="navbar-nav">
          {routes.map(({path, name}, i)=>
            <li className="nav-item" key={i}>
              <Link id={"link_"+name.toLowerCase()} className="nav-link" to={path}>{name}</Link>
            </li>
          )}
        </menu>
      </div>
    </header>
  )
}
