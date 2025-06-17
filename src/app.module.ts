import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users.controller';
import { AlbumsController } from './album.controller';
import { UsersControllerTwo } from './userstwo.controller';
import { UsersControllerThree } from './usersthree.controller';
import { UsersControllerFour } from './usersfour.controller';
import { UserControllerFive } from './usersfive.controller';

@Module({
  imports: [],
  controllers: [AppController,UsersController,AlbumsController,UsersControllerTwo,UsersControllerThree,UsersControllerFour,UserControllerFive],
  providers: [AppService],
})
export class AppModule {}
