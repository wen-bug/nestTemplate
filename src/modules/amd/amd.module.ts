import { Module } from '@nestjs/common';
import { AmdService } from './amd.service';
import { AmdController } from './amd.controller';
import { User } from './entities/amd.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AmdController],
  providers: [AmdService],
})
export class AmdModule {}
