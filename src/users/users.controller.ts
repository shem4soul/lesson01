import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //Get /users
  findAll() {
    return [];
  }

  @Get('interns') //Get /users/interns
  findAllInterns() {
    return [];
  }

  @Get(':id') //Get /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }
}
