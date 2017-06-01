export default {
  get: (url, params = {}, header = {}) => {
    return fetch(url).then((res) => res.json()).then((data) => data)
  }
}
