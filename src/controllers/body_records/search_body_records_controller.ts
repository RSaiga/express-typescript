import { Controller, Get, Route, Tags } from 'tsoa'
import { type BodyRecord } from '../../domain/models/body_records/body_record'

@Route('body_records')
@Tags('body_records')
export class SearchBodyRecordsController extends Controller {
  @Get()
  public async get(): Promise<BodyRecord[]> {
    return [
      { id: 'test2', weight: 64, fat_rate: 20.1, date: '2023-02-03' },
      {
        id: 'test1',
        weight: 65,
        fat_rate: 20.8,
        date: '2023-02-02',
      },
    ]
  }
}
