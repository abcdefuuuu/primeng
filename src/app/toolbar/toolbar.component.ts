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
      //無下拉選單
      {
        label: '表單',
        icon: 'pi pi-fw pi-file-edit',
        routerLink: ['/form'],
      },
      //有下拉選單(範例)
      {
        label: '社群',
        icon: 'pi pi-fw pi-comments',
        items: [
          {
            label: 'Facebook',
            icon: 'pi pi-fw pi-facebook',
            routerLink: ['/imformation']
            // items: [
            //   {
            //     label: 'Bookmark',
            //     icon: 'pi pi-fw pi-bookmark'
            //   },
            //   {
            //     label: 'Video',
            //     icon: 'pi pi-fw pi-video'
            //   }
            // ]
          },
          {
            label: 'Twitter',
            icon: 'pi pi-fw pi-twitter',
            routerLink: ['/survey'],
          },
          {
            label: 'Instagram',
            icon: 'pi pi-fw pi-instagram'
          }
        ]
      },
    ];
  }
}
