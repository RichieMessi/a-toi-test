import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {getOrganizationsIndex} from '../../../../services/organization/Organization'
import OrganizationListItem from '../../OrganizationListItem/OrganizationListItem'

export const OrganizationContainer = (props) => {
  console.log(props)
  useEffect(() => {
    getOrganizations()
  }, [])

  const getOrganizations = () => {
    getOrganizationsIndex().then(response => response.json()).then(object => {
      if (object.data) {
        props.loadOrganizations(object.data)
      }
    })
  }

  const renderOrganizations = () => {
    let orgs = props.organizations
    if (orgs) {
      return orgs.map((o, i) => {
        return <OrganizationListItem key={i} organization={o}></OrganizationListItem>
      })
    }
  }

  return (
    <div className="organizations-container">
      <ul className="collection">
        {renderOrganizations()}
      </ul>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    loadOrganizations: (data) => dispatch({
      type: 'loadOrganizations',
      value: data
    })
  }
}

const mapStateToProps = state => {
  return {
    organizations: state.organizations
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationContainer);
