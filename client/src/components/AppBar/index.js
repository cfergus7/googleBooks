import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"

function AppBar() {
    return (
        <nav className="AppBar AppBar-expand-lg AppBar-dark bg-primary">
            <p className="AppBar-brand">Google Books</p>
            <button className="AppBar-toggler" type="button" data-toggle="collapse" data-target="#AppBarSupportedContent" aria-controls="AppBarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="AppBar-toggler-icon"></span>
            </button>

            <div className="collapse AppBar-collapse" id="AppBarSupportedContent">
                <ul className="AppBar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/saved">Saved</a>
                    </li>
                </ul>
            </div>
        </nav>)
}

export default AppBar;