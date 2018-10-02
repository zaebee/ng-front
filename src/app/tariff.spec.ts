import {Tariff} from './tariff';

describe('Tariff', () => {
  it('should create an instance', () => {
    expect(new Tariff()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let tariff = new Tariff({
      name: 'first',
      price: 10
    });
    expect(tariff.name).toEqual('first');
    expect(tariff.price).toEqual(10);
  });
});
