import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //Get /users or /users?role=value
  findAll(@Query('role') role?: 'admin' | 'intern' | 'Engineer  ') {
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

  @Post() //Post /users
  create(@Body() user: { any }) {
    return user;
  }

  @Patch(':id') //PATCH/users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') //DELETE /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
