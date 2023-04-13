import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  title = 'array';
  reg!: FormGroup;
  constructor(public fb:FormBuilder){}
  ngOnInit(): void {
    this.reg=this.fb.group({
'name':new FormControl('',[Validators.required,Validators.minLength(4)]),
'mail':new FormControl('',Validators.required),
'hobby': new FormArray([])
    })
 


  }
  
  
  formsubmit(n:FormGroup){
    console.log(n.value);  
    console.log(this.hobbyget.values); 
  }
  addHobby(){
const controname = new FormControl(null,Validators.required);
(<FormArray> this.reg.get('hobby')).push(controname) 
  }

  get hobbyget(){
return (<FormArray> this.reg.get('hobby')).controls;
  }
  
  remove(i: number){
    const controname = new FormControl(null,Validators.required);
    (<FormArray> this.reg.get('hobby')).removeAt(i);
  }
    }

