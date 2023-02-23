import request from 'supertest'
import { app } from '../../src/app'
import { execSync } from 'child_process'
import { PrismaClient } from '@prisma/client'

function call() {
  return request(app).get(`/api/v1/body_records/`)
}

describe(`Search Body Records`, () => {
  const prisma = new PrismaClient()

  beforeEach(async () => {
    execSync('npx prisma migrate reset --force --skip-seed', {})
  })

  test(`success zoro data`, async () => {
    await call().then((res) => {
      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual([])
    })
  })

  test(`success single data`, async () => {
    await prisma.user.create({
      data: {
        id: 'test1',
        name: 'test taro',
        email: 'test1@example.com',
      },
    })
    await prisma.bodyRecord.create({
      data: {
        id: 'test1',
        userID: 'test1',
        weight: 65.3,
        fatLate: 20.8,
        recordedDate: new Date('2023-02-02'),
      },
    })
    const expected = [{ id: 'test1', weight: 65.3, fat_rate: 20.8, date: '2023-02-02' }]
    await call().then((res) => {
      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual(expected)
    })
  })

  test(`success multi data`, async () => {
    await prisma.user.create({
      data: {
        id: 'test1',
        name: 'test taro',
        email: 'test1@example.com',
      },
    })
    await prisma.bodyRecord.create({
      data: {
        id: 'test2',
        userID: 'test1',
        weight: 64.9,
        fatLate: 20.1,
        recordedDate: new Date('2023-02-03'),
      },
    })
    await prisma.bodyRecord.create({
      data: {
        id: 'test1',
        userID: 'test1',
        weight: 65.3,
        fatLate: 20.8,
        recordedDate: new Date('2023-02-02'),
      },
    })
    const expected = [
      { id: 'test2', weight: 64.9, fat_rate: 20.1, date: '2023-02-03' },
      { id: 'test1', weight: 65.3, fat_rate: 20.8, date: '2023-02-02' },
    ]
    await call().then((res) => {
      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual(expected)
    })
  })
})
