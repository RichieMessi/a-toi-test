import React, { useEffect } from 'react'
import {getApiStatus} from './services/status/Status'
import { connect } from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import OrganizationContainer from './components/organization/containers/OrganizationContainer/OrganizationContainer'
import OrganizationShow from './components/organization/OrganizationShow/OrganizationShow'
import VenueShow from './components/venue/VenueShow/VenueShow'
import Navbar from './components/Navbar/Navbar'
import BreadCrumb from './components/BreadCrumb/BreadCrumb'
import SearchResultsContainer from './components/SearchResultsContainer/SearchResultsContainer'

export const App = (props) => {  
  const checkApiStatus = () => {
    getApiStatus().then(response => response.json()).then(object => {
      if (object.code === 200) {
        // console.warn(props.toggleApiStatus)
        props.toggleApiStatus()
      }
    })
  }
  
  useEffect(() => {
    checkApiStatus()
  }, [])

  return (
    <BrowserRouter>  
      <BreadCrumb></BreadCrumb>  
      <Navbar></Navbar>
      <SearchResultsContainer></SearchResultsContainer>
      <Switch>
        <Route exact path='/organizations/:id' component={OrganizationShow}/>
        <Route exact path='/organizations'  component={OrganizationContainer}/>
        <Route exact path='/organizations/:organizationId/venues/:venueId'  component={VenueShow}/>
      </Switch>
    </BrowserRouter>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    toggleApiStatus: () => dispatch({
      type: 'toggleApiStatus'
    })
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
