import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ClientListItem from '../client/ClientListItem/ClientListItem'

export const SearchResultsContainer = (props) => {
  console.log(props)
  const renderSearchResults = () => {
    if (props.results) {
      return props.results.map((result) => {
        // console.log(result)
       return <ClientListItem key={result.id} client={result}></ClientListItem>
      })
    } else {
      return null
    }
  }
  return (
    <ul className="collection">
      {renderSearchResults()}
    </ul>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    // addBreadCrumb: (data) => dispatch({
    //   type: 'addBreadCrumb',
    //   value: data
    // }),
  }
}

// return {
//   addBreadCrumb: (data) => dispatch({
//     type: 'addBreadCrumb',
//     value: data
//   }), 
// }

const mapStateToProps = state => {
  return {
    results: state.clientSearchResults
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer);
