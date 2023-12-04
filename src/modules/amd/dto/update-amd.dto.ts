import { PartialType } from '@nestjs/mapped-types';
import { CreateAmdDto } from './create-amd.dto';

export class UpdateAmdDto extends PartialType(CreateAmdDto) {}
