import request from 'supertest'
import { app } from '../../src/app'

describe(`Search User`, () => {
  test(`GET`, (done) => {
    const expected = { id: 123, name: 'Test User' }
    request(app)
      .get(`/api/v1/users/123`)
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual(expected)
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
