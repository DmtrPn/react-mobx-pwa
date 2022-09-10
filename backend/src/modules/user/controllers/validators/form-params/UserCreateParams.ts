// import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
// import { IsUUID, IsString, IsOptional } from 'class-validator';
//
// import { Attributes } from 'project-types/common';
//
// // import { MovieCreateData } from '@user/domain/user';
// import { UserModel } from '@user/infrastructure/user/UserModel';
//
// export class UserCreateParams implements Attributes<UserModel> {
//
//     @IsUUID('4')
//     @ApiProperty({ format: 'uuid' })
//     public id: string;
//
//     @IsString()
//     @ApiProperty()
//     public name: string;
//
//     @IsString()
//     @ApiProperty()
//     public email: string;
//
//     @IsString()
//     @IsOptional()
//     @ApiPropertyOptional()
//     public description?: string;
//
// }
