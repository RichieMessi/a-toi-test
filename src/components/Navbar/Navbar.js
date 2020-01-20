import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {isMobile, isTablet} from "react-device-detect";
import {searchForClients} from '../../services/search/Search'

export const Navbar = (props) => {

  const searchInputHandler = (e) => {
    let input = e.target.value
    if (e.key === 'Enter') {
      searchForClients(input).then(response => response.json())
      .then(object => {
        if (object.data) {
          props.dispatchClientSearchResults(object.data)
        }
      })
    }
  }

  const renderNavbarContext = () => {
    if (isMobile) {
      return (
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <div className="input-field">
                <input onKeyUp={searchInputHandler}/>
                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </div>
          </nav>
        </div>
      )
    } else {
      return (
        <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <div className="input-field">
              <input onKeyUp={searchInputHandler}/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </div>
        </nav>
        </div>
      )
    }
  }
  return (
    renderNavbarContext()
  );
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchClientSearchResults: (data) => dispatch({
      type: 'dispatchClientSearchResults',
      value: data
    })
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
