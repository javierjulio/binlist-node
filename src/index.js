import fetch from 'cross-fetch';
import NotFoundError from './errors/not_found_error';
import RateLimitError from './errors/rate_limit_error';

// const binlistFind = async function(bin) {
//   const result = await fetch(`https://lookup.binlist.net/${bin}`)
//     .then(response => {
//       if (res.status >= 400) {
//         throw new Error("Bad response from server");
//       }
//       // TODO: wrap in try/catch ???
//       return response.json();
//     })
//   return result;
// }

// Errors
// 404 - not found
// 429 - request limited reach (rate limit)
// 4xx/5xx - unknown error

const binlistFind = function(bin) {
  return fetch(`https://lookup.binlist.net/${bin}`,
    {
      headers: { 'Accept-Version': '3', }
    })
  .then(response => {
    if (response.status === 404) {
      throw new NotFoundError(`Bin ${bin} not found`);
    } else if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    // throw new RateLimitError();
    // TODO: wrap in try/catch ???
    return response.json();
  })
  // .catch(error => {
  //   console.error(error);
  //   return Promise.reject(error);
  // });
}

// module.exports = binlistFind;

export default binlistFind;
