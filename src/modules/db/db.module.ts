import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { DbController } from './db.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '47.103.147.250',
      port: 3306,
      username: 'yc',
      password: 'tzk3A2b2kEWK3szJ',
      database: 'yc',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [DbController],
  providers: [DbService]
})
export class DbModule {}
