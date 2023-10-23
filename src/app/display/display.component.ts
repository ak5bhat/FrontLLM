import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  table1Data: any[] = [];

  constructor(private http: HttpClient, private ApiService: ApiService) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.ApiService.baseUrl).subscribe((data) => {
      this.table1Data = data.map(item => ({...item, selected: false}));
    });

  }

  editItem(item: any): void {
    // Handle the edit action here
    console.log('Edit button clicked for item:', item);
  }
}