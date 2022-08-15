import { Pipe, PipeTransform } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(allMovies: any[], term: string): any[] {

    if (term != null && term[0]!=' ') {
      return allMovies.filter((movie) => {
        if (movie.title)
          return movie.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        else  if(movie.name)return movie.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        else if(movie.movieName) return movie.movieName.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      })
    
    }    
    else return allMovies
  
  }

}
