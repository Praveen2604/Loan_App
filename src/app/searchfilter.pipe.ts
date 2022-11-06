import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, searchtext: string): any {
    if(!value) return [];
    if(!searchtext) return value;
    return value.filter((animal: string)=>{
      return animal.toLowerCase().includes(searchtext); 
    })
  }

}
