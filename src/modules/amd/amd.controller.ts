import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AmdService } from './amd.service';
import { CreateAmdDto } from './dto/create-amd.dto';
import { UpdateAmdDto } from './dto/update-amd.dto';
import { FindAmdDto } from './dto/find-amd.dto';

import { Roles } from '../guard/roles.decorator';
import { RolesGuard } from '../guard/roles.guard';
import { LoggingInterceptor } from '../interceptor/log.interceptor';
import { UseInterceptors } from '@nestjs/common/decorators';

@Controller('amd')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class AmdController {
  constructor(private readonly amdService: AmdService) {}

  @Post()
  create(@Body() createAmdDto: CreateAmdDto) {
    return this.amdService.create(createAmdDto);
  }

  @Get()
  findAll() {
    return this.amdService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.amdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmdDto: UpdateAmdDto) {
    return this.amdService.update(+id, updateAmdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amdService.remove(+id);
  }

  @Post('to')
  @Roles('admin')
  getOne(@Body() bd: FindAmdDto) {
    console.log(bd.age, 'param');

    return bd.age;
  }

  @Post('single')
  single(@Body() bd: FindAmdDto) {}
}
