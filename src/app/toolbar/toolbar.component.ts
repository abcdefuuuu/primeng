import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
  showSidebar: any
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'form',
      },
      {
        label: 'File',
        icon: 'pi pi-pw pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'User', icon: 'pi pi-fw pi-user-plus' },
            { label: 'Filter', icon: 'pi pi-fw pi-filter' }
          ]
        },
        { label: 'Open', icon: 'pi pi-fw pi-external-link' },
        { separator: true },
        { label: 'Quit', icon: 'pi pi-fw pi-times' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
      }
    ];
  }
}
