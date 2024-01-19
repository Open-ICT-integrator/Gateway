import { IsNotEmpty, IsString, IsInt, IsPositive, isString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Field name must be added' })
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Field password must be added'})
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Provide a roll' })
  @IsString()
  roll: string;

  
}