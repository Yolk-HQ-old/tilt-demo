import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  async getData(): Promise<User[]> {
    return await this.userModel.findAll();
  }
}
