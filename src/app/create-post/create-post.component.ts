import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  createform:FormGroup;
  ngOnInit(): void {
    this.createform = new FormGroup({
      id: new FormControl('0',{validators:[Validators.required,Validators.max(10)],nonNullable:true}),
      name: new FormControl('Enter Name',[Validators.required,Validators.maxLength(10)]),
      description: new FormControl('Enter Description',[Validators.required,Validators.maxLength(100),this.checkvalid.bind(this)])


    });
    
  }
  resetform(){
    this.createform.reset();
  }
  checkvalid(control:FormControl){
    if(control.value =='apple'){
      return {errorcode:'apple not allowed'}
    }
    else{
      return null;
    }
  }
  submitform(){
   console.log(this.createform);

  }
  

}
