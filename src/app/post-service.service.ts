import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getPosts():Observable<any>{
  return this.http.get('http://localhost:3000/posts').pipe(map((resdata)=>{
    return resdata;
      
      
  }));
  }

  getPost(id:number){
    let idparams = new HttpParams().set('id',id ) ;
    return this.http.get('http://localhost:3000/posts',
    {params :idparams}
    );
  }

  updatePost(payload:any){
    return this.http.put('http://localhost:3000/posts/'+payload.id,payload);
  }

  createIntent(payload:any):Observable<any>{
    return this.http.post('http://localhost:8000/createIntent',payload);
  }

  constructor(private http:HttpClient) { }

 
}
