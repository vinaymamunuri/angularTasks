import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { AppServices } from '../app.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  ngOnInit(): void {}
  

  @Input() fname:string;
  name = '';
  productForm: FormGroup;

  constructor(private fb:FormBuilder , private appService : AppServices ) {
   
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
public fileToUpload: File = null;
public image : any = ""
public data : any 
public show:any= ""
public names :any =  ["karthik", "sai", "ganesh"]



updateName(){
  this.updatename = 'karthik'
}

buttonDisabled = false;



handleFileInput(files: FileList) {
console.log( " files ", files)
  this.fileToUpload = files.item(0);
}

changeListener($event){
   var file:File = $event.target.files[0];
   var myReader:FileReader = new FileReader();
   myReader.onloadend = () => {
     this.image = myReader.result;
     console.log(" image  - - -> ", this.image)
   }
   myReader.readAsDataURL(file);
 }

 getDetails(){
  this.data =  this.appService.getData().subscribe(
    (res)=>{
      console.log("data ",res)
    }
  )
  
 }

 hideContent(){
  this.show=!this.show
}
}



