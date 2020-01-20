import {getApiRoot} from '../../constants/Api'

export const getOrganizationsIndex = () => {
  return new Promise((resolve, reject) => {
    let endpoint =`${getApiRoot()}/api/core/v1/organizations`;
    fetch(endpoint, {
      method: "get",
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

export const getOrganization = (id) => {
  return new Promise((resolve, reject) => {
    let endpoint =`${getApiRoot()}/api/core/v1/organizations/${id}`;
    fetch(endpoint, {
      method: "get",
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