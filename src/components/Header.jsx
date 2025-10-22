import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../shared.css';

class Header extends Component {
    state = { menuOpen: false };

    closeMenu = () => {
        this.setState({ menuOpen: false });
    };

    toggleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    };

    render() {
        const { menuOpen } = this.state;
        return (
            <header className="header">
                <nav className="navbar">
                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="nav__li">
                    <Link to="/" className="nav__a" onClick={this.closeMenu}>Easy</Link>
                    </li>
                    <li className="nav__li">
                    <Link to="/medium" className="nav__a" onClick={this.closeMenu}>Medium</Link>
                    </li>
                    <li className="nav__li">
                    <Link to="/hard" className="nav__a" onClick={this.closeMenu}>Hard</Link>
                    </li>
                </ul>
                <div
                    className={`burger ${menuOpen ? 'active' : ''}`}
                    onClick={this.toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                </nav>
            </header>
        )
    }
}

export default Header;