import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './models/create-user.dto';
import { User } from './models/user.entity';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}

    async create(createUserDto: CreateUserDto): Promise<User>{
        const user = this.userRepository.create(createUserDto);
        try {
            return await this.userRepository.save(user);
        } catch (e) {
            throw e;
        }
    }

    async findOne(username: string) : Promise<User | undefined>{
        return await this.userRepository.findOne({ where: { name: username } });
    }
}
    

