import { Component, OnInit } from '@angular/core';
import { AppServices } from '../app.service';

@Component({
  selector: 'app-moviessearch',
  templateUrl: './moviessearch.component.html',
  styleUrls: ['./moviessearch.component.css']
})
export class MoviessearchComponent implements OnInit {

  constructor(private appService : AppServices) { }

  ngOnInit(): void {
    this.getDetails()
  }
  public moviesdata :any =[];
  public name : any = ""
  public movies:any;
  public search :any

 getDetails(){
  this.appService.getData().subscribe(
    (res)=>{
     this.moviesdata= res;
     this.movies = this.moviesdata.Search;
    }
  )
  
 }

}
