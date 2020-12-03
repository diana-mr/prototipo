import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  genders: any[] = [
    {id: 1, name: 'Acción '},
    {id: 2, name: 'Anime'},
    {id: 3, name: 'Documentales'},
    {id: 4, name: 'Mexicanas'},
    {id: 5, name: 'Dramas'},
    {id: 6, name: 'Terror'},
    {id: 7, name: 'Deportes'},
    {id: 8, name: 'Historia'},
    {id: 9, name: 'Ciencia y naturaleza'},
    {id: 10, name: 'Clásicas'},
    {id: 11, name: 'Romance'},
    {id: 12, name: 'Infantiles y Familiares'},
    {id: 13, name: 'Fantasía'},
    {id: 14, name: 'De Hollywood'},
    {id: 15, name: 'Internacionales'},
    {id: 16, name: 'Navidad'},
    {id: 17, name: 'Policiales'},
    {id: 18, name: 'Otras Categorias'},  
  ];

  constructor() {}

}
