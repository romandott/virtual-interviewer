import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  public constructor(private readonly sanitizer: DomSanitizer) {
  }

  public transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'string') {
      return this.sanitizer.bypassSecurityTrustHtml(value)
    }

    return null;
  }
}
