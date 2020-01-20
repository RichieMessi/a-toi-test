import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export const OrganizationListItem = (props) => {
  console.warn(props)
  let organization = props.organization.attributes
  let path = `/organizations/${props.organization.id}`
  return (
    <Fragment>
    <Link to={path} className="collection-item avatar" onClick={ () => { props.addBreadCrumb({path: path, name: organization.name}) }}>
      <img src="https://cdn0.iconfinder.com/data/icons/seo-ultra-2/1024/Global_Organization-01-512.png" alt="" className="circle"/>
      <span className="title">{organization.name}</span>
      <p>{organization.address} <br/>
         {organization.client_count} Clients<br/>
      </p>
      <span href="#!" className="secondary-content"><i className="material-icons">grade</i></span>
    </Link>
    </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationListItem);
