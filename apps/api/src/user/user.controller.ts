import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesGuard, JwtGuard } from './guard';
import { Roles } from './decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signUp')
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.userService.signUp(createUserDto);
  }

  @Post('signIn')
  signIn(@Body() updateUserDto: UpdateUserDto) {
    console.log(
      '🚀 ~ file: user.controller.ts:28 ~ UserController ~ signIn ~ updateUserDto',
      updateUserDto,
    );
    return this.userService.signIn(updateUserDto);
  }

  @Get('all')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('admin')
  findAll() {
    return this.userService.findAll();
  }

  @Get('one/:id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('client')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch('update/:id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('client')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete('delete/:id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('client')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
