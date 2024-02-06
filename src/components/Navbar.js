import "./Navbar.css";
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";
import { Component } from "react";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="navbar">
        <nav className="NavbarItems">
          <h1 className="navbar-logo">RJ-Tour</h1>

          <div className="menu-icon">
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              onClick={this.handleClick}
            ></i>
          </div>

          <ul
            className={
              this.state.clicked ? "navbar-menu active" : "navbar-menu"
            }
          >
            {Menuitems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <button>Sign Up</button>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
