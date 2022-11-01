import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    createUserDto.password = await argon.hash(createUserDto.password);

    const user = await this.userModel.create(createUserDto);

    return { ...user, password: undefined };
  }

  async signIn(updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findOne({
      username: updateUserDto?.username,
    });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await argon.verify(
      user.password,
      updateUserDto.password
    );

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    return { ...user, password: undefined };
  }

  async findAll() {
    try {
      const users = await this.userModel.find().lean();

      return users;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findOne(id: number) {
    const user = await this.userModel.findById(id).lean();

    if (!user) {
      throw new Error(`User not found`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userModel
      .findByIdAndUpdate(id, updateUserDto)
      .lean();

    if (!user) {
      throw new Error(`User not found`);
    }

    return user;
  }

  async remove(id: number) {
    const user = await this.userModel.findByIdAndDelete(id);

    if (!user) {
      throw new Error(`User not found`);
    }
  }

  private handleExceptions(error: any) {
    console.log(error);
    throw new InternalServerErrorException(`Check server logs`);
  }
}
