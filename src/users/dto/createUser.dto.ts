import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
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

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({ example: 'jhonwick', description: 'User name' })
  readonly userName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'where_is_my_dog', description: 'Password' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'jhonwick@gmail.com', description: 'Email Id' })
  readonly email: string;
}
