import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'filter'
})

export class FilterPipe implements PipeTransform{

    transform(value){
       console.log(" aaaaaaa",value)
    }
}