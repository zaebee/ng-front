import { Component, OnInit } from '@angular/core';
import { Tariff } from '../tariff';
import { TariffDataService } from '../tariff-data.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css'],
  providers: [TariffDataService],
})
export class ShoplistComponent implements OnInit {

  tariffs: Tariff[] = [];
  selectedTariff: Tariff;
  key: string = 'name'; //set default
  reverse: boolean = false;

  constructor(
    private tariffDataService: TariffDataService
  ) { }

  ngOnInit() {
    this.tariffDataService
      .getAllTariffs()
      .subscribe(
        (tariffs) => {
          this.tariffs = tariffs;
        }
      );
  }

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  onSelect(tariff: Tariff): void {
    this.selectedTariff = tariff;
  }

}
