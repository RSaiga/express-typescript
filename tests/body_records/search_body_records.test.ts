import request from 'supertest'
import { app } from '../../src/app'

describe(`Search Body Records`, () => {
  test(`success`, (done) => {
    const expected = [{ id: 'test2', weight: 64, fat_rate: 20.1, date: '2023-02-03'}, { id: 'test1', weight: 65, fat_rate: 20.8, date: '2023-02-02'}]
    request(app)
      .get(`/api/v1/body_records/`)
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
