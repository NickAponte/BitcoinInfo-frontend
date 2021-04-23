import { Component, OnInit } from '@angular/core';

import {BitInfoServiceService} from '../services/bit-info-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsApiObj: any;

  constructor(private bitInfoService : BitInfoServiceService) { }

  ngOnInit(): void {
    this.callNewsApi();
  }
  public callNewsApi(){
    this.bitInfoService.callNewsApi().subscribe( (data: any) => {
      console.log('data=' + data);  
      this.newsApiObj = data;    
      
    });
  }


}
