import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'urlSafe'
})
export class UrlSafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(url:any): SafeResourceUrl{
    url = url.replace('watch?v=', 'embed/');
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
