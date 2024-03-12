import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class Test1Dto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Jhon', description: 'First name' })
  readonly message: string;
}
