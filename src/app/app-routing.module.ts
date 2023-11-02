import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDisplayComponent } from './post-display/post-display.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'display',component:PostDisplayComponent},
  {path:'createpost' ,component: CreatePostComponent},
  {path:'editprofile',component:EditProfileComponent},
  {path:'editpost/:id',component:EditPostComponent},
  {path:'payment',component:PaymentComponent},
  {path:'',component:HomeComponent ,pathMatch:'full'},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
