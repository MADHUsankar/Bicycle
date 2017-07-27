import { Pipe, PipeTransform } from '@angular/core';
import { Bicycle } from "./bicycle";

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(bike_array: Array<Bicycle>, searchStr: string): Array<Bicycle> {
    // if((searchStr=null))
    //   {
    //     searchStr = ""
    //   }
    //   else{
    
    //   }

      searchStr=searchStr.toLowerCase();
    return bike_array.filter(bike => {
      return bike.title.toLowerCase().includes(searchStr) 
    })
  }

}
