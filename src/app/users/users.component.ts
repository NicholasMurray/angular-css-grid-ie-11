import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements OnInit  {
  URL: string = 'https://randomuser.me/api/?results=10';
  asyncResult: any;
  users: any;
  gridTemplateCols: number = 3;

  constructor(private httpclient: HttpClient) {}

  ngOnInit() {
    this.getAsyncData();
  }

  async getAsyncData() {
    this.asyncResult = await this.httpclient.get(this.URL).toPromise();
    this.users = this.asyncResult.results;
  }

  getGridColumnNum(index: number) {
    return ((index % this.gridTemplateCols) + 1);
  }

  getGridRowNum(index: number) {
    return Math.floor(((index) + this.gridTemplateCols) / this.gridTemplateCols);
  }

}
