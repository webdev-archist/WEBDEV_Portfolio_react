import React from "react";
import { Form, Button } from "react-bootstrap"
// import { Link } from 'react-router-dom'
import Map from "./blocks/Map"
//import css from "../assets/css/contact.scss";

export default class Contact extends React.Component {
  constructor(props){
    super(props)
    // this.ok = "ok"
  }
  render(){
    return (
      <main id="contact" className="container-fluid p-5">
        <section className="row">
          <article className="showContacts col-7">
          {
            this.props.data.showContacts.map((item,i)=>{
              var rs = [], a
              if(item.data instanceof Object){
                for(a in item.data)
                  rs.push(<a href={item.data[a]} target={"_blank"} key={a}>{a}</a>)
              }
              return(
                <ul className={"showContacts__"+item.item+" row my-3 py-3"} key={i}>
                  <li className="col-4">
                    <img src={require("./blocks/img/contact/"+item.src)} alt={item.alt}/>
                  </li>
                  <li className="col-8">
                    {
                      item.href ?
                        <a href={item.href}>{item.data}</a>
                      :
                      item.data ?
                        rs.map(item_=>item_)
                      :
                        <Map/>
                    }
                  </li>
                </ul>
              )
            })
          }
          </article>
          {console.log(this.props.data)}
          <Form className="col-5 my-5">
            {
              this.props.data.form.map((item,i)=><Form.Group controlId={"exampleForm.ControlInput"+i}>
                  <Form.Label>{item.content}{item._?"*":""}</Form.Label>
                  {
                  item.type==="textarea"
                    ? <Form.Control required as="textarea" rows="3" palceholder={item.placeholder}/>
                    : <Form.Control required type={item.type?item.type:"text"} placeholder={item.placeholder} />
                  }
                </Form.Group>
              )

            }
            <Button variant="primary" type="submit">
              {this.props.lang=="jp"?"送信":"Submit"}
            </Button>
          </Form>
        </section>
      </main>
    )
  }
}
