import About from "./About"
import Contact from "./Contact"
// import Skills from "./Skills"

export default [
  { path: "/about", name: "私について", Component: About, props: "about" },
  { path: "/contact", name: "コンタクト", Component: Contact, props: "contact" },
  //{ path: "/skills", name: "Skills", Component: Skills }
];
