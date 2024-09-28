import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public nameLower: string = 'matias';
  public nameUpper: string = 'MATIAS';
  public fullName: string = 'MaTiAS pEllEgrIneSchi';

  public customDate: Date = new Date();

}
