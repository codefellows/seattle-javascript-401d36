"use strict";
exports.__esModule = true;
var VendingMachine = /** @class */ (function () {
    function VendingMachine(sensor, inventory) {
        this.sensor = sensor;
        this.inventory = inventory;
    }
    VendingMachine.prototype.add = function (item) {
        var newItem = {
            name: item.name
        };
        this.inventory.addItem(newItem);
    };
    return VendingMachine;
}());
exports["default"] = VendingMachine;
//# sourceMappingURL=vending-machine.js.map