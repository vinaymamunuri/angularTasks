import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  ngOnInit(): void {}
  
  name = '';
  productForm: FormGroup;

  constructor(private fb:FormBuilder) {
   
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([
        this.fb.group({
          quantity: '',
          price: '',
        })
      ]) ,
    });
  }
  
  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      quantity: '',
      price: '',
    })
  }
   
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
   
  onSubmit() {
    window.alert(JSON.stringify(this.productForm.value));
  }

//second task

public colors= [{name:"vinay",age:26,isAged:true},
{name:"ganesh", age:25, isAged:false},
{name:"santhosh", age:28 , isAged:true},
{name:'arjun', age:23, isAged:false}]
public updatename:any = 'vinay'



updateName(){
  this.updatename = 'karthik'
}
buttonDisabled = false;

public fileToUpload: File = null;

handleFileInput(files: FileList) {
console.log( " files ", files)
  this.fileToUpload = files.item(0);
}
}
