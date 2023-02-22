import { Controller, Get, Route, Tags } from 'tsoa'
import { type BodyRecord } from '../../domain/models/body_records/body_record'
import { BodyRecordsUseCase } from '../../usecases/body_records/body_records_use_case'

@Route('body_records')
@Tags('body_records')
export class SearchBodyRecordsController extends Controller {
  @Get()
  public async get(): Promise<BodyRecord[]> {
    return new BodyRecordsUseCase().find()
  }
}
