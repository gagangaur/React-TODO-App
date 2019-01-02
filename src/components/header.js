import React from 'react'

export class Header extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-default">
            <div className="container">
            <div className="navbar-header">
            <ul className="nav navbar-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            </ul>
            </div>
            </div>
            </nav>
        );
    }
}