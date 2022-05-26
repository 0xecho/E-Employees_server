"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.SERVER_PORT || "8000";
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send("Dube zare yelem, nege temelesu.");
});
let employees = [];
app.get('/employees', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(employees);
})));
app.post('/employees', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = req.body;
    employee.id = employees.length + 1;
    employees.push(employee);
    res.send(employee);
})));
app.put('/employees/:id', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const employee = req.body;
    employees = employees.map((e) => {
        return e.id === id ? employee : e;
    });
    res.send(employee);
})));
app.delete('/employees/:id', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    employees.splice(id, 1);
    res.send(employees);
})));
app.listen(port);
