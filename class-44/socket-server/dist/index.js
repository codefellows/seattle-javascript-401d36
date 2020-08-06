"use strict";
exports.__esModule = true;
var app_1 = require("./lib/app");
function addNumbers(a, b) {
    return a + b;
}
function logger(greeting) {
    console.log(greeting.text);
    return;
}
// console.log(addNumbers(2, 3));
// logger({ text: 'hello world' });
// const machine = new VendingMachine({ name: 'my sensor' }, { name: 'my inventory' });
app_1["default"].start(3000);
//# sourceMappingURL=index.js.map