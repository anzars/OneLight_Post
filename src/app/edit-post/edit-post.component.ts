import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PostService } from '../post-service.service';
import { NgForm } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
import {BreakpointObserver,BreakpointState,Breakpoints} from '@angular/cdk/layout'

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent  implements OnInit,AfterViewInit{
  
  constructor(private router:Router, private breakpointobserver:BreakpointObserver, private route: ActivatedRoute, private postservice:PostService){

  }
 nativepic:any;
 ismobile:boolean=false;
 postdata:any;
  ngOnInit(): void {
    this.breakpointobserver.observe([Breakpoints.Handset,Breakpoints.Tablet]).subscribe((state:BreakpointState)=>{
      if(state.matches){
        alert('mobile');
      }

    })
    this.breakpointobserver.observe(['(min-width:600px)']).subscribe((state:BreakpointState)=>{
      if(state.matches){
        alert('desktop');
      }

    })
    this.route.params.pipe(switchMap((params:any)=>{
     return params.id+''; 
     })).subscribe((id)=>{
    
    this.postservice.getPost(parseInt(id)).subscribe((data:any)=>{
      this.postdata =data[0];
    })

    
     });
  }

  ngAfterViewInit(): void {
    
  
  
  }

  onfileselected(event:any){
    debugger;
    let file:File= event.target.files[0];
    if(file){;
     
     this.postdata.imageurl=URL.createObjectURL(file);
      
    }
  }

  formsubmit(editform:NgForm){
    console.log(editform.value);
   
    this.postservice.updatePost(editform.value).subscribe((resdata)=>{
      this.router.navigate(['/display'],{relativeTo:this.route}); 
    });
    

   

  }

}
