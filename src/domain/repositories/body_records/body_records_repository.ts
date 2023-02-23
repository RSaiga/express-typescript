import { type BodyRecord } from '../../models/body_records/body_record'
import { PrismaClient } from '@prisma/client'

export class BodyRecordsRepository {
  find = async (): Promise<BodyRecord[]> => {
    const prisma = new PrismaClient()
    const records = await prisma.bodyRecord.findMany()
    return records.map((value) => ({
      id: value.id,
      weight: value.weight,
      fat_rate: value.fatLate,
      date: value.recordedDate
        .toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .split('/')
        .join('-'),
    }))
  }
}
