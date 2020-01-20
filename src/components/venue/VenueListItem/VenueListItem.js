import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export const VenueListItem = (props) => {
  let venue = props.venue.attributes
  let orgId = props.organizationId
  let path = `/organizations/${orgId}/venues/${props.venue.id}`
  return (
    <Link to={path} className="collection-item avatar" onClick={ () => { props.addBreadCrumb({path: path, name: venue.name}) } }>
      <img src="https://cdn2.iconfinder.com/data/icons/building-vol-2/512/restaurant-512.png" alt="" className="circle"/>
      <span className="title">{venue.name}</span>
      <p>{venue.address} <br/>
        clients: {venue.client_count} <br/>
        time zone: {venue.time_zone}
      </p>
      <span href="#!" className="secondary-content"><i className="material-icons">grade</i></span>
    </Link>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addBreadCrumb: (data) => dispatch({
      type: 'addBreadCrumb',
      value: data
    }), 
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueListItem);
