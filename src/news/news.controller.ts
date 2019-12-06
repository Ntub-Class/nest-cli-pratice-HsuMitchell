import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private readonly appService: NewsService) { }

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
