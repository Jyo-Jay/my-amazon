import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(amount:number, rate:number=5):number {
    let damnt= amount*rate/100

    return amount-damnt
  }

}
