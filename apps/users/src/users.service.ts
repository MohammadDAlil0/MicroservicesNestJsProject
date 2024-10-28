import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  
  private users: UserDto[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 25
    },
    {
      id: 2,
      firstName: 'Bob',
      lastName: 'Ce',
      age: 10
    }
  ]
  findAllUsers(): UserDto[] {
    return this.users;
  }
}
