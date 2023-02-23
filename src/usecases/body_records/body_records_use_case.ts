import { type BodyRecord } from '../../domain/models/body_records/body_record'
import { BodyRecordsRepository } from '../../domain/repositories/body_records/body_records_repository'

export class BodyRecordsUseCase {
  find = async (): Promise<BodyRecord[]> => await new BodyRecordsRepository().find()
}
