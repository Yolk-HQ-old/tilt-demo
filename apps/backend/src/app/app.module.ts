import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from '../models/user';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'postgres',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: 'password',
      database: 'database_development',
      models: [User]
    }),
    SequelizeModule.forFeature([User])
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
