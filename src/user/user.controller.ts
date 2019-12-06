import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly appService: UserService) { }

    @Get()
    getAll(): string {
        return 'Get all ok';
    }

    @Get(':id')
    getOne(@Param('id') id) {
        return 'Get one ok';
    }

    @Post()
    postUser(@Body() body) {
        return 'Post all ok';
    }

    @Put(':id')
    putUser(@Body() body, @Param('id') id) {
        return 'Put ok';
    }

    @Delete(':id')
    deleteUser(@Param('id') id) {
        return 'Delete ok';
    }

}
