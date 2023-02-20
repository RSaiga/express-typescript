import request from 'supertest'
import { app } from '../src/app'

describe(`Hello world`, () => {
  test(`GET`, (done) => {
    request(app)
      .get(`/api/v1`)
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe(`Hello World!`)
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
