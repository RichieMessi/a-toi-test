import {getApiRoot} from '../../constants/Api'

export const getClientsIndex = (organizationId, venueId, limit = null, offset = null, query = null) => {
  return new Promise((resolve, reject) => {
    let endpoint =`${getApiRoot()}/api/core/v1/organizations/${organizationId}/venues/${venueId}/clients?limit=${limit}&offset=${offset}&query=${query}`;
    fetch(endpoint, {
      method: "GET",
    })
      .then(e => {
        if (e.ok) {
          // console.log(e)
          resolve(e);
        } else {
          // console.log(e)
          reject(e);
        }
      })
      .catch(e => console.log("error::", e));
  });
};