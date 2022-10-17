import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface IMenuItem {
  items?: Array<IMenuItem>;
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-search-pages',
  templateUrl: './search-pages.component.html',
  styleUrls: ['./search-pages.component.scss']
})

export class SearchPagesComponent implements OnInit {

  constructor(private router: Router) { }

  items: Array<IMenuItem> = [];

  ngOnInit(): void {
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  }

  routeToCreatePage(): void {
    this.router.navigate(['/create'])
  }

}
