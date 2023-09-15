import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateElderDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({ example: 'Jhon', description: 'First name' })
  readonly firstName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({ example: 'Wick', description: 'Last name' })
  readonly lastName: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: '70', description: 'elder age' })
  readonly age: number;

  @IsString()
  @MaxLength(13)
  @ApiProperty({ example: '+91999999999', description: 'elder mobile number' })
  readonly mobileNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'female', description: 'gender of elder' })
  readonly gender: string;

  @IsString()
  @MaxLength(30)
  @ApiProperty({ example: 'Jhon', description: 'First name' })
  readonly guardianName: string;

  @IsString()
  @MaxLength(13)
  @ApiProperty({
    example: '+91999999999',
    description: 'guardian contact number',
  })
  readonly guardianContactNumber: string;
}
