import { Component, OnInit } from '@angular/core';
import { Tariff } from '../tariff';
import { TARIFFS } from '../mock-tariffs';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  tariffs = TARIFFS;
  selectedTariff: Tariff;

  constructor() { }

  ngOnInit() {
  }

  onSelect(tariff: Tariff): void {
    this.selectedTariff = tariff;
  }

}
