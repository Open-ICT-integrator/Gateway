import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { DoughnutsModule } from './doughnuts/doughnuts.module';


@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db/sql',
    synchronize: true,
    entities: [User],
  }),UserModule, AuthModule, DoughnutsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
