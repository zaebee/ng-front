export class Tariff {
  id: number;
  name: string;
  download_speed: number;
  upload_speed: number;
  benefits: Array<string>;
  price: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
