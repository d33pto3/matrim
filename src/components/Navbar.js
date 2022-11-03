import { NavLink } from "react-router-dom"

export default function Navbar() {
    return(    <>
    <header id="header" class="d-flex align-items-center ">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="index.html">Matrimony<span>.</span></a></h1>
      
      <a href="index.html" class="logo"><img src="assets/img/logo.png" alt=""></img></a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><NavLink className="nav-link scrollto active" to="/" exact>Home</NavLink></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Contact</a></li>
          <li><NavLink class="nav-link scrollto" to="/users" exact>Users</NavLink></li>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  </>)
}