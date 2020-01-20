import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {getClientsIndex} from '../../../services/client/Client'
import ClientListItem from '../../client/ClientListItem/ClientListItem'
import BottomScrollListener from 'react-bottom-scroll-listener';

export const VenueShow = (props) => {
  let organizationId = props.match.params.organizationId
  let venueId = props.match.params.venueId

  useEffect(() => {
    fetchClients(organizationId, venueId, 15, 0, null)
  }, [])

  useEffect(() => {
    return () => {
      props.unloadVenueClients()
    }
  }, []);

  const fetchClients = (organizationId, venueId, limit, offset, query) => {
    getClientsIndex(organizationId, venueId, limit, offset, query).then(response => response.json())
    .then(object => {
      if (object.data) {
        props.loadVenueClients(object.data)
      }
    })
  }

  const renderClients = () => {
    let clients = props.clients
    if (clients && clients.length > 0) {
      return clients.map((client, index) => {
        return <ClientListItem client={client} key={index}></ClientListItem>
      })
    }
  }
  return (
    <div className="venue-show-wrapper">
      <div className="container">
        <h5>Clients</h5>
        <ul className="collection">
          <BottomScrollListener onBottom={() => { fetchClients(organizationId, venueId, 15, props.offset, null) }} offset={250}>
              {renderClients()}
          </BottomScrollListener>
        </ul>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    loadVenueClients: (data) => dispatch({
      type: 'loadVenueClients',
      value: data
    }), 
    unloadVenueClients: () => dispatch({
      type: 'unloadVenueClients'
    })
  }
}

const mapStateToProps = state => {
  return {
    clients: state.venueClients,
    offset: state.venueClientsOffset
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueShow);
