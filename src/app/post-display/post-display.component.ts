import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.scss']
})
export class PostDisplayComponent implements OnInit{
  constructor(private postService:PostService, private router:Router,private route:ActivatedRoute){}
  postData:any;
  ngOnInit(): void {
    this.postService.getPosts().subscribe((resdata)=>{
      console.log(resdata);
      this.postData = resdata;
    })
  }

  editPost(i:number){
   console.log(i);
   this.router.navigate(['/editpost',i],{queryParams:{'name':'anzar'},fragment:'loading',relativeTo:this.route});
  }

}
