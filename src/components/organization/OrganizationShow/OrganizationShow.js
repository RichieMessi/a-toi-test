import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {getOrganization} from '../../../services/organization/Organization'
import VenueListItem from '../../venue/VenueListItem/VenueListItem'
export const OrganizationShow = (props) => {
  let organizationId = props.match.params.id
  let organization = props.organization ? props.organization.attributes : null
  useEffect(() => {
    fetchOrganization(organizationId)
  }, [])

  const fetchOrganization = (id) => {
    getOrganization(id).then(response => response.json())
    .then(object => {
      if (object.data) {
        props.loadOrganization(object.data)
      }
    })
  }
  const renderOrgName = () => {
    if (organization) {
    return <li className="collection-header"><h4>{organization.name}</h4></li>
    }
  }

  const renderOrgStats = () => {
    if (organization) {
      return (
        <>
          <li className="collection-item">Administrators: {organization.administrators.data.length}</li>
          <li className="collection-item">Owners: {organization.owners.data.length}</li>
          <li className="collection-item">Venues: {organization.venues.data.length}</li>
        </>
      )
    }
  }

  const renderVenues = () => {
    let venues = organization ? organization.venues.data : null
    if (venues) {
      return venues.map((venue, index) => {
        return <VenueListItem venue={venue} organizationId={organizationId} key={index}></VenueListItem>
      })
    }
  }
  return (
    <div className="organization-show-wrapper">
      <ul className="collection with-header">
        {renderOrgName()}
        {renderOrgStats()}
      </ul>
      <div className="container organization-show-venue-wrapper">
        <h6>Venues</h6>
        <ul className="collection">
          {renderVenues()}
        </ul>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    loadOrganization: (data) => dispatch({
      type: 'loadOrganization',
      value: data
    })
  }
}

const mapStateToProps = state => {
  return {
    organization: state.organization
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationShow);
