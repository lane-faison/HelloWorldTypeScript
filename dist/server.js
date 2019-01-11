"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// Can add anything after the / to make custom get routes
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/colorado', (req, res) => res.send('Hello Colorado!'));
app.get('/lane', (req, res) => res.send('Hello Lane!'));
app.listen(3000, () => console.log('Example app listening on port 3000'));
//# sourceMappingURL=server.js.map