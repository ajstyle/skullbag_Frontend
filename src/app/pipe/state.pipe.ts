import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'stateFilter'
})
export class StatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value) ;
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      console.log(val.address.state, args);
      if (val.address.state) {
        const rVal = val.address.state.toLocaleLowerCase().includes(args);
        return rVal;
      }
    });

  }

}
