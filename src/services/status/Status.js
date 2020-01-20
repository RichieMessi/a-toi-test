import {getApiRoot} from '../../constants/Api'

export const getApiStatus = () => {
  return new Promise((resolve, reject) => {
    let endpoint =`${getApiRoot()}/api/core/v1/status`;
    fetch(endpoint, {
      method: "POST",
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