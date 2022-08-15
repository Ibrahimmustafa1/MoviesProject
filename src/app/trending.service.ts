import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  val = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }
  getTrending(x: string): Observable<any> {

    return this.http.get(`https://api.themoviedb.org/3/trending/${x}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
  getactorDetails(id: any): Observable<any> {

    return this.http.get(`https://api.themoviedb.org/3/person/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
  getmoviedetails(x: string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${x}?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }

  getmoviesyts(page: any): Observable<any> {
    return this.http.get(`https://yts.mx/api/v2/list_movies.json?page=${page}`)
  }
  search(word: string): Observable<any> {
    return this.http.get(`https://yts.mx/api/v2/list_movies.json?query_term=${word}`)
  }
  
  getmoviesytsMovieDetails(id: any): Observable<any> {
    return this.http.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
  }
  addToFavorite(data: any): Observable<any> {
    return this.http.post(`https://route-egypt-api.herokuapp.com/addToFavorites`, data)
  }
  GetFavorite(token: any): Observable<any> {
    let userID: any = localStorage.getItem('userId')
    let header = new HttpHeaders({
      'token': token,
      'userID': userID
    });
    console.log(userID);

    return this.http.get(`https://route-egypt-api.herokuapp.com/getFavorites`, { headers: header });
  }
  gettvShowdetails(id: string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }

}
