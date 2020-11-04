import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {
  }

  async create(doc: User) {
    const result = await new this.userModel(doc).save();
    return result.id;
  }
  
  async login(username: string, password: string) {
    const result = await this.userModel.find({username, password})
    if(result.length > 0) {
      return {
        message: "Login efetuado com sucesso!",
        data: result
      }
    }
    else {
      return {
        message: "Login inválido!",
        data: null
      }
    }
  }

  async findById(id: number) {
    // ...
  }

  async update(user: User) {
    // ...
  }

  async remove(user: User) {
    // ...
  }
}