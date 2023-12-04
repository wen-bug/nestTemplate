import { Injectable } from '@nestjs/common';
import { CreateAmdDto } from './dto/create-amd.dto';
import { UpdateAmdDto } from './dto/update-amd.dto';
import { User } from './entities/amd.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class AmdService {
  @InjectRepository(User)
  private readonly amdRepository: Repository<User>;
  create(createAmdDto: CreateAmdDto):Promise<User[]> {
    return this.amdRepository.find();
  }

  findAll() {
    return `This action returns all amd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} amd`;
  }

  update(id: number, updateAmdDto: UpdateAmdDto) {
    return `This action updates a #${id} amd`;
  }

  remove(id: number) {
    return `This action removes a #${id} amd`;
  }
}
