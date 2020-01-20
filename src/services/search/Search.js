import {getApiRoot} from '../../constants/Api'

export const searchForClients = query => {
  return new Promise((resolve, reject) => {
    let endpoint = getApiRoot() + "/api/core/v1/search";
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query
      })
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