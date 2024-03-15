import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TimeTakenDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Jhon', description: 'First name' })
  readonly time: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Jhon', description: 'First name' })
  readonly timeTaken: string;
}

export class BottleCountDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Jhon', description: 'First name' })
  readonly time: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Jhon', description: 'First name' })
  readonly bottleCount: string;
}