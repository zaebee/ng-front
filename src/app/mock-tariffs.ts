import { Tariff } from './tariff';

export const TARIFFS: Tariff[] = [
  {
    id: 1,
    name: 'Small',
    download_speed: 50,
    upload_speed: 6,
    benefits: [
      'test',
      'test',
      'test',
    ],
    price: 12.5
  },
  {
    id: 2,
    name: 'Medium',
    download_speed: 70,
    upload_speed: 8,
    benefits: [
      'test',
      'test',
      'test',
    ],
    price: 23.5
  },
  {
    id: 3,
    name: 'Large',
    download_speed: 100,
    upload_speed: 12,
    benefits: [
      'test',
      'test',
      'test',
    ],
    price: 55.5
  },
  {
    id: 4,
    name: 'Extra Large',
    download_speed: 150,
    upload_speed: 20,
    benefits: [
      'test',
      'test',
      'test',
    ],
    price: 70.5
  }
];
