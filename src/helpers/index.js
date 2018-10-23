import ajax from '@fdaciuk/ajax'

export const to = (promise) =>
  promise.then(r => [null, r]).catch(e => [e])

export const http = {
  get (...args) {
    return new Promise((resolve, reject) => {
      ajax().get(...args).then(resolve).catch(reject)
    })
  }
}
