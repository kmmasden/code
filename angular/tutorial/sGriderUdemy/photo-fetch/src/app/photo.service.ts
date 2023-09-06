import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { HttpHeaders } from '@angular/common/http'; 

interface UnsplashResponse {
  urls: {
    small: string; 
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {


  constructor(private http: HttpClient) { }

  

  public getRandomPhoto() {
    const headers= new HttpHeaders()
      .set('Authorization', 'Client-ID g7okbCbG7nVJSZKrFKDYPCZLr8YV4r29dSVHwpCMINc'); 

    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {'headers': headers}); 
  }
}
