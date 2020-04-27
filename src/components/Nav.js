import React from "react";
import {  Switch, Route, Link, useLocation, useParams, useRouteMatch } from "react-router-dom";
import routes from './routes'
//TRY TO UNDERSTAND THIS SOLUTION TO COMPUTE THE BREADCRUMP:
//    https://medium.com/@mattywilliams/generating-an-automatic-breadcrumb-in-react-router-fed01af1fc3

export default function Nav(){
  let pathname = useLocation().pathname;
  // pathname = pathname.split('/')
  // pathname.shift()
  let path_1 = useRouteMatch("/:_1")
  let path_2 = useRouteMatch("/:_1/:_2")
  let path_3 = useRouteMatch("/:_1/:_2/:_3")
  // console.log(pathname);
  console.log(path_1);
  console.log(path_2);
  console.log(path_3);
  console.log(__dirname);
  console.log("__dirname");
  let bool = true
  let doIgnore = window.location.hostname == "localhost" ? false : true

  return(
    <nav className="nav">
      {
        routes.map((item,j)=>{
          console.log('---')
          console.log(path_1)
          console.log(path_1&& item.path == path_1.url)
          console.log(!doIgnore)
          console.log('---')
          item.path = window.location.hostname.indexOf("github") != -1 ? window.location.pathname.substring(0,window.location.pathname.lastIndexOf('/'))+item.path : item.path
          if(path_1 && path_1.url.indexOf(item.path) != -1){
            return (
              <ol className="breadcrumb" key={j}>
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                { !doIgnore ? <li className="breadcrumb-item"><span>{path_1.params._1}</span></li> : "" }
              </ol>
            )
          }
          if(path_2 && path_2.url.indexOf(item.path) != -1){
            return (
              <ol className="breadcrumb" key={j}>
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                { !doIgnore ? <li className="breadcrumb-item"><Link to={path_1.url}>{path_1.params._1}</Link></li> : "" }
                <li className="breadcrumb-item"><span>{path_2.params._2}</span></li>
              </ol>
            )
          }
          if(path_3 && path_3.url.indexOf(item.path) != -1){
            return (
              <ol className="breadcrumb" key={j}>
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                { !doIgnore ? <li className="breadcrumb-item"><Link to={path_1.url}>{path_1.params._1}</Link></li> : "" }
                <li className="breadcrumb-item"><Link to={path_2.url}>{path_2.params._2}</Link></li>
                <li className="breadcrumb-item"><span>{path_3.params._3}</span></li>
              </ol>
            )
          }
          if(!path_1 && !path_2 && !path_3){
            if(bool){
              bool = false
              return (
                <ol className="breadcrumb" key={j}>
                  <li className="breadcrumb-item" key={j}><span>Home</span></li>
                </ol>
              )
            }
          }
        })
      }
      {/*
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          {
            routes.map((item,j)=>{
              return(
                  { path_1 && item.path == path_1.url && doIgnore ? <li className="breadcrumb-item"><span>{path_1.params._1}</span></li> : "" }
                  { path_2 && item.path == path_2.url ? <li className="breadcrumb-item"><span>{path_2.params._2}</span></li> : "" }
                  { path_3 && item.path == path_3.url ? <li className="breadcrumb-item"><span>{path_3.params._3}</span></li> : "" }
              )
            })
          }
          </ol>
        */}
      {/*
        <Route exact  path="/contact">
          {document.getElementById('home') ? console.log("home"):""}
        </Route>
      */}
    </nav>
  )
}
