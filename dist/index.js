"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//console.log("word");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
/*
app.listen(3000, () => {
    console.log('Server on port', 3000)
})
*/
const index_1 = __importDefault(require("./routes/index"));
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(index_1.default);
app.listen(3000);
console.log('server on port', 3000);
