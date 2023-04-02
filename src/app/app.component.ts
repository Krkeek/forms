import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subsciptions: string[] = [
    "Basic",
    "Advanced",
    "Pro"
]
defaultSubsciption: string = "Advanced";
content: string = "";
  onSubmit(form: NgForm){
    if (form.invalid && form.touched || form.invalid) {
      
    }else {

      this.content += "email is " + form.value.email + "\n -------password is " + form.value.password;

    }

  }

}
