import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public http : HttpClient) {}
  ngOnInit() {
    console.log(localStorage.getItem('auth_token'))

  }

  setlogin(f:NgForm) {
    console.log(f.value.tokentext);
    this.http.post('/api/login', {token:f.value.tokentext}).subscribe((result:any)=>{
      localStorage.setItem('auth_token', f.value.tokentext);
      console.log(result.message+ ' with token ' +localStorage.getItem('auth_token'))
    },(e)=>{
      console.log('unabel to login');
    })
  }
  logout() {
    this.http.get('/api/logout').subscribe((result:any)=> {
      console.log(result.message+ ' and removed  token ' +localStorage.getItem('auth_token'));
      localStorage.removeItem('auth_token');
    },(e)=>{ 
      console.log('unabel to Logout');
    })
  }


  first() {
    this.http.get("api/insert").subscribe((resultl)=>{
      console.log(resultl);
    } ,(e)=>{
      console.log(e.error);
    })
  }
  second() {
    this.http.post('/api/second', {'name':'lalith kumar'}).subscribe((result)=>{
      console.log(result);
    },(e)=>{
      console.log(e.error);
    })
  }

}
