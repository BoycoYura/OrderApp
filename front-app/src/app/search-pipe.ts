import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

// export class SearchPipe implements PipeTransform {
//     transform(value: string): string {
//       let newStr: string = "";
//       for (var i = value.length - 1; i >= 0; i--) {
//         newStr += value.charAt(i);
//       }
//       return newStr;
//     }
// }


export class SearchPipe implements PipeTransform{
    transform(AllOrders: any[],searcher: any){
        //Undefenid

        // if( searcher === undefined) return AllOrders;

        var Maestro = AllOrders.filter(function(order) {
            return order.price;
          });
          console.log("Filtered:");
          console.log(Maestro);
    }
}