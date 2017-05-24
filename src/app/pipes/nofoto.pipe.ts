import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nofoto'
})
export class NofotoPipe implements PipeTransform {

  transform(value: any[]): string {

    if ( !value ) return 'assets/img/noimage.png';

    return (value.length > 0 ) ? value[1].url : 'assets/img/noimage.png';
  }

}
