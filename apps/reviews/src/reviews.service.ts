import { Injectable,Inject } from '@nestjs/common';
import { ReviewsOfMovies } from './reviews.model';
import { InjectModel } from '@nestjs/sequelize';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ReviewsService {
    constructor(@InjectModel(ReviewsOfMovies) private reviewsRepository:typeof ReviewsOfMovies,
    @Inject('FILM_SERVICE') private rabbitFilmsService: ClientProxy){}
  

    async getAllReviews(){
      await this.reviewsRepository.findAll()
    }


    async getAllFilms() {
      const ob$ = await this.rabbitFilmsService.send({
        cmd: 'get-all-films',
      },
      {});
      const films = await firstValueFrom(ob$).catch((err) => console.error(err));
      return films;
    }



  async postReviews(){


      
    }
}