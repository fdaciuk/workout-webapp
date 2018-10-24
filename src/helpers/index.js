import ajax from '@fdaciuk/ajax'

export const to = (promise) =>
  promise.then(r => [null, r]).catch(e => [e])

export const http = {
  get (...args) {
    return new Promise((resolve, reject) => {
      ajax().get(...args).then(resolve).catch(reject)
    })
  },

  post (...args) {
    return new Promise((resolve, reject) => {
      ajax().post(...args).then(resolve).catch(reject)
    })
  },

  upload (...args) {
    return new Promise((resolve, reject) => {
      ajax({ headers: { 'content-type': null }}).post(...args).then(resolve).catch(reject)
    })
  },

  instance: ajax
}

export { default as videos } from './videos'
