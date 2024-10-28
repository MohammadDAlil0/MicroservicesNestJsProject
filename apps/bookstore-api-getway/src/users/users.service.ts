import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
    constructor(@Inject('USERS_CLIENT') private usersClien: ClientProxy) {}
    findAll() {
        return this.usersClien.send('users.findAll', {});
    }
}
