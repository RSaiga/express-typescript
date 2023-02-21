import { Controller, Get, Path, Route, Tags } from 'tsoa'

@Route('users')
@Tags('user')
export class SearchUserController extends Controller {
  @Get('{userId}')
  public async get (@Path() userId: number): Promise<User> {
    return {
      id: userId,
      name: 'Test User'
    }
  }
}

export interface User {
  id: number
  name: string
}
