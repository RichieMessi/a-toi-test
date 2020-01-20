const initialState = {
  isApiDown: true,
  organizations: [],
  organization: null, 
  venueClients: [], 
  venueClientsOffset: 0,
  clientSearchResults: [],
  breadCrumbs: [
    {
      path: '/organizations',
      name: 'Organizations'
    }  
  ]
}

export const reducer = (state = initialState, action) => {
  let actionType = action.type
  switch(actionType) {
    case 'toggleApiStatus':
      return {
        ...state,
        isApiDown: false
      }
    case 'loadOrganizations': 
      return {
        ...state, 
        organizations: action.value
      }
    case 'loadOrganization':
      return {
        ...state, 
        organization: action.value
      }
    case 'loadVenueClients':
      return {
        ...state, 
        venueClients: state.venueClients.concat(action.value), 
        venueClientsOffset: state.venueClientsOffset + action.value.length
      }
    case 'unloadVenueClients':
      return {
        ...state,
        venueClients: [],
        venueClientsOffset: 0
      }
    case 'addBreadCrumb':
      // state.breadCrumbs.some(i => console.log(i)) 
      return {
        ...state,
        breadCrumbs: state.breadCrumbs.some(c => c.path === action.value.path) ? state.breadCrumbs : state.breadCrumbs.concat(action.value) 
      }
    case 'removeBreadCrumbAndChildren':
      let indexToRemove = state.breadCrumbs.findIndex(c => c.path === action.value) + 1
      console.log(indexToRemove)
      let nextBreadCrumbs = JSON.parse(JSON.stringify(state.breadCrumbs))
      console.log(nextBreadCrumbs)
      let removed = indexToRemove > 0 ? nextBreadCrumbs.splice(indexToRemove, state.breadCrumbs.length -1) : state.breadCrumbs
      console.log(removed)
      return {
        ...state, 
        breadCrumbs: nextBreadCrumbs
      }
    case 'dispatchClientSearchResults':
      return {
        clientSearchResults: state.clientSearchResults.concat(action.value)
      }
    default:
      return state
  }
}