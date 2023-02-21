import { Controller, Get, Route, Tags } from 'tsoa'

@Route('body_records')
@Tags('body_records')
export class SearchBodyRecordsController extends Controller {
  @Get()
  public async get (): Promise<any> {
    return [
      { id: 'test2', weight: 64, fat_rate: 20.1, date: '2023-02-03' },
      {
        id: 'test1',
        weight: 65,
        fat_rate: 20.8,
        date: '2023-02-02'
      }
    ]
  }
}
