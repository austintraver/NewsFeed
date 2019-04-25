import React from "react";
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove, faSignInAlt, faSignOutAlt, faDoorOpen, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/NavigationBar.css'


class TitleNav extends Component{
  constructor(props){
    super(props)
    this.state = {
      loggedIn: this.props.loggedIn,
    }
  }
  render(){
    var disabled = !this.state.loggedIn;
    return(

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark w-100">
              <div class="navbar-header">
                <a class="navbar-brand" href="/" id="logotitle">Newsfeed &nbsp;
                  <FontAwesomeIcon icon={faDove}/>
                </a>
              </div>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a href="/" class="nav-link" data-toggle="modal" data-target="#myModal1">Log In &nbsp;
                      <FontAwesomeIcon icon={faSignInAlt}/>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/" class= { this.state.loggedIn ? "nav-link" : "nav-link disabled" }>Log Out &nbsp;
                      <FontAwesomeIcon icon={faSignOutAlt}/>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/" class="nav-link" data-toggle="modal" data-target="#myModal2">Register &nbsp;
                      <FontAwesomeIcon icon={faDoorOpen}/>
                    </a>
                  </li>
                  <li class="nav-item">
                      <a class= { this.state.loggedIn ? "nav-link" : "nav-link disabled" } data-toggle="modal" data-target="#profilemodal" href="/">
                      Profile &nbsp;<FontAwesomeIcon icon={faAddressCard}/>

                      </a>
                  </li>
                </ul>

                <form class="navbar-search form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2 diabled" type="search" placeholder="Search" aria-label="Search" disabled={ disabled }/>
                  <button class="btn btn-outline-light my-2 my-sm-0" type="submit" disabled={ disabled }>Search</button>
                </form>
              </div>

            </nav>
    )
  }
}
export default TitleNav
