import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
    return (
      <div className={styles.container}>
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>
  
        <NavLink to="/about">
          <button>About</button>
        </NavLink>
  
        <div className={styles.bttn}>
          <NavLink to="/favorites">
            <button>Favorites</button>
          </NavLink>
        </div>
  
        <div className={styles.bttn}>
          <SearchBar onSearch={props.onSearch} />
        </div>
  
        <Link to="/">
          <div className={styles.logout}>
            <button onClick={props.logout}>Log Out</button>
          </div>
        </Link>
      </div>
    );
  }
  