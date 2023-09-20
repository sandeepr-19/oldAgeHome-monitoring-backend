import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/users.schema';
import { UsersController } from './users.controller';
import { GuardModule } from '../guard/guard.module';

@Module({
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    GuardModule,
  ],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
