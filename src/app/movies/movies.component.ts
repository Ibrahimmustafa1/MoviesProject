import { Component, OnInit ,OnDestroy } from '@angular/core';
import { TrendingService } from '../trending.service';
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  moviesnames: any[] = [];
  token: any
  decodedToken: any
  p: any = 1;
  data: any
  total: number = 0
  search: any = null;
  repeat:any;
  constructor(private _trendingService: TrendingService) {
    this.getPageNumber()
    this.getNewmovies();
    this._trendingService.getmoviesyts(this.p).subscribe((res) => {
      this.total = res.data.movie_count
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    })

    this._trendingService.val.subscribe((res) => {
      this.search = this._trendingService.val.getValue();
      this._trendingService.search(this.search).subscribe((res) => {
        this.moviesnames = res.data.movies
      })
    })
    this.token = localStorage.getItem('userToken');
    this.decodedToken = jwtDecode(this.token)
    console.log(this.decodedToken);

  }
  getPageNumber() {
    if (localStorage.getItem('pagenum') != null) {
      this.p = (Number(localStorage.getItem('pagenum')));
    }
  }
  getNewmovies() {
    this._trendingService.getmoviesyts(this.p).subscribe((res) => {
      this.moviesnames = res.data.movies
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      localStorage.setItem("pagenum", `${this.p}`)
      console.log(this.moviesnames);

    })
  }
  adTofavourite(id: any, title: any, imgurl: any) {
    this.repeat=localStorage.getItem("favid")
    if (this.repeat != id) {
      this.data = {
        "movieName": `${title}`,
        "imgUrl": `${imgurl}`,
        "userID": `${this.decodedToken._id}`,
        "movieID": `${id}`,
        "token": this.token

      }
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        width:'20%',
        timer: 2000,
        timerProgressBar: true,
        icon: 'success',
        title: "<h5> Added To Favourites </h5>",
        background: '#fff',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      this._trendingService.addToFavorite(this.data).subscribe(res => {
        console.log(res);
      })
      
      this.repeat=id;
      localStorage.setItem('favid',`${this.repeat}`)
    }
    else{
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        title: "<h5>Already in  Favourites </h5>",
        background: '#fff',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    }
  }
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    localStorage.setItem('pagenum',`${0}`)
  }

}
