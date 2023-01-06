import About from "./About"
import Contact from "./Contact"
// import Skills from "./Skills"

export default [
  { path: "/about", name: "About", Component: About, props: "about" },
  { path: "/contact", name: "Contact", Component: Contact, props: "contact" },
  //{ path: "/skills", name: "Skills", Component: Skills }
];
