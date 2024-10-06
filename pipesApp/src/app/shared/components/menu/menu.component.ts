import { Component } from '@angular/core';
import { MenuItem,PrimeIcons } from 'primeng/api';



@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent {

  public menuItems: MenuItem[] | undefined;

    ngOnInit() {
        this.menuItems = [
            {
              label: 'Pipes de angular',
              icon: 'pi pi-desktop',
              items:[
                {
                  label: 'Textos y Fechas',
                  icon: 'pi-align-center',
                  routerLink: '/'
                },
                {
                  label: 'Numeros',
                  icon: 'pi pi-dollar',
                  routerLink: 'numbers'
                },
                {
                  label: 'No Comunes',
                  icon: 'pi pi-globe',
                  routerLink: 'uncommon'
                },
              ]
            },
            {
              label: 'Pipes Personalizados',
              icon: 'pi pi-cog',
              items:[
                {
                  label: 'Custom Pipes',
                  icon: 'pi pi-plus',
                  routerLink: 'custom'
                }
              ]
            }

        ];
    }

}
