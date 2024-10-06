import { Pipe, PipeTransform } from "@angular/core";

// 'matias' | toggleCase = 'MATIAS';
// 'MATIAS' | toggleCaer = 'matias';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string) : string {
    return value.toUpperCase();
  }

}
