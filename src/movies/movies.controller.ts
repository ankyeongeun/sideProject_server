import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { CreateMovieDto } from './DTO/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller()
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}

    @Get() 
    getAll() : Movie[] { //movie[] == array<movie>?
        return this.moviesService.getAll();
    }

 

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.creat(movieData);
    }
    
}
