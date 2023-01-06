import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  // Link
} from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
// import Skills from "./components/Skills"
import js from "./assets/js/_.js";
import Contact from "./components/Contact"
import json from "./assets/json/data.json";
import jsonJp from "./assets/json/dataJp.json";
import routes from "./components/routes";
import routesJp from "./components/routesJp";
import css from "./assets/css/index.scss"


export default function App(props) {
  let  jp = (document.location.pathname==="/jp"||document.location.pathname==="/jp/")
  , datas = {
    routes: jp?routesJp:routes,
    lang: jp?"jp":"en"
  }
  return (
    <Router>
      <Header {...datas} data={jp?jsonJp.static.header:json.static.header} />

      <Nav {...datas} />
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        {/*
          <Switch>
          {routes.map(({path, name, Component}, i) =>
            <Route key={i}>
              <Component exact path={path}/>
            </Route>
            <Route exact path={path} key={i} render={Component} />
          )}
          </Switch>
        */}
      <Switch>
        {/*
          <Route path="/skills">
          <Skills />
        </Route>
        */}
        {
          console.log(window.location.hostname)
        }
        {
          routes.map((item,i)=>{
            item.path = window.location.hostname.indexOf("github") !== -1 ? window.location.pathname.substring(0,window.location.pathname.lastIndexOf('/'))+item.path : item.path
            return(
              <Route path={item.path} key={i}>
                {
                  item.name === "Contact" 
                    ? <Contact data={jp?jsonJp.contact:json.contact} /> 
                    : item.name === "About" 
                      ? <About data={jp?jsonJp.about:json.about} /> 
                      : ""
                }
              </Route>
            )
          })
        }


        <Route path="/OCR_project4_react_portfolio/">
          <Home data={json.home}/>
        </Route>
        <Route path="/">
          <Home data={jp?jsonJp.home:json.home}/>
        </Route>
      </Switch>

      <Footer {...datas} data={jp?jsonJp.footer:json.footer} />
    </Router>

  );
}
