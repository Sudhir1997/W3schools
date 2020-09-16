import React from 'react';
// This convert JSX in Javascript Objects 
import { BrowserRouter, Route, Link } from "react-router-dom";

// This will route to links. Links can't be updated in React without this. Tag a doesn't work it will reload page.


// https://www.w3schools.com/howto/howto_css_icon_bar.asp#
// https://www.educative.io/blog/react-router-tutorial


export default class Nav extends React.Component{
  render(){
    return(<div class="icon-bar">
    <Link to="/" activeClassName="fa fa-search"></Link>
    <Link to="#" activeClassName="fa fa-search"></Link> 
   <Link to="#" activeClassName="fa fa-envelope"></Link> 
   <Link to="#" activeClassName="fa fa-globe"></Link>
   <Link to="#" activeClassName="fa fa-trash"></Link> 
</div>)
  }
}