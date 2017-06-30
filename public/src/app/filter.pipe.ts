import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {



  transform(value: any, input: string) {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function (el: string){
        return el.toString().toLowerCase().indexOf(this.filter.toString().toLowerCase()) > -1;
      })
    }
    return value;
  }
}
