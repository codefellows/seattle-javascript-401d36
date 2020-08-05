
interface Item {
  name: string;
}

interface Sensor {
  name: string;
}

interface Inventory {
  addItem: (item: Item) => Item;
}

export default class VendingMachine {

  sensor: Sensor;
  inventory: Inventory;

  constructor(sensor: Sensor, inventory: Inventory) {
    this.sensor = sensor;
    this.inventory = inventory;
  }

  add(item: Item): void {
    let newItem = {
      name: item.name,
    }

    this.inventory.addItem(newItem);
  }
}