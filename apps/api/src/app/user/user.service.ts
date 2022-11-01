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
    createUserDto.password = await argon.hash(createUserDto.password, {});

    const user = await this.userModel.create(createUserDto);

    if (!user) {
      throw new InternalServerErrorException('User not created');
    }

    return { ...createUserDto, password: undefined };
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

    return { status: 'success', message: 'User logged in' };
  }

  async findAll() {
    try {
      const users = await this.userModel.find().select('-password').lean();

      return users;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id).select('-password').lean();

    if (!user) {
      throw new Error(`User not found`);
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel
      .findByIdAndUpdate(id, updateUserDto)
      .lean();

    if (!user) {
      throw new Error(`User not found`);
    }

    return user;
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndDelete(id);

    if (!user) {
      throw new Error(`User not found`);
    }
  }

  private handleExceptions(error: unknown) {
    console.log(error);
    throw new InternalServerErrorException(`Check server logs`);
  }
}
