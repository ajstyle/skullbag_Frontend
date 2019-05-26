import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'nameFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value) ;
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      if (val.name) {
        const rVal = val.name.toLocaleLowerCase().includes(args);
        return rVal;
      }

      if (val.state) {
        const rVal = val.state.toLocaleLowerCase().includes(args);
        return rVal;
      }
    });

  }

}
