import { type BodyRecord } from '../../models/body_records/body_record'

export class BodyRecordsRepository {
  find = (): BodyRecord[] => [
    { id: 'test2', weight: 64, fat_rate: 20.1, date: '2023-02-03' },
    { id: 'test1', weight: 65, fat_rate: 20.8, date: '2023-02-02' },
  ]
}
