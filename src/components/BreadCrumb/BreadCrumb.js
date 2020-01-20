import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export const BreadCrumb = (props) => {
  // console.warn(props)
  const renderApiStatus = () => {
    let isApiDown = props.isApiDown
    if (!isApiDown) {
      return <span className="new badge blue" data-badge-caption="ODIN is active"></span>
    } else {
      return <span className="new badge red" data-badge-caption="ODIN is inactive"></span>
    }
  }

  const renderBreadCrumbs = () => {
    console.log(props)
    let crumbs = props.breadCrumbs
    if (crumbs) {
      return crumbs.map((c, i) => {
        return <Link to={c.path} className="breadcrumb" key={i} onClick={() => { props.removeSelfAndChildren(c.path) } }>{c.name}</Link>
      } )
    }
  }
  return (
    <div className="navbar-fixed">
      <nav>
        {renderApiStatus()}
        <div className="nav-wrapper">
          <div className="col s12">
            {renderBreadCrumbs()}
          </div>
        </div>
      </nav>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    removeSelfAndChildren: (path) => dispatch({
      type: 'removeBreadCrumbAndChildren',
      value: path
    })
  }
}

const mapStateToProps = state => {
  return {
    isApiDown: state.isApiDown,
    breadCrumbs: state.breadCrumbs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadCrumb);
