import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlImage'
})
export class UrlImagePipe implements PipeTransform {

  transform(value: string): unknown {
    return null;
  }

}
