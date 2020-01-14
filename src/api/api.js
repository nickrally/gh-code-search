import axios from 'axios'

const config = {
    auth: {
        username: process.env.REACT_APP_GITHUB_USER,
        password: process.env.REACT_APP_GITHUB_PERSONAL_TOKEN
      }
  }

const fetchResults = url => {
      const req = axios.get(url, config)
      return req
        .then(req => { console.log("GREAT SUCCESS!", req); return req; })
        .catch(error => { console.error("OH NOES!", error); return Promise.reject(error); });
}

export default fetchResults;
    