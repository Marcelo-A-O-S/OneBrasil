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
const electron_1 = require("electron");
const electron_prompt_1 = __importDefault(require("electron-prompt"));
const ExposeHandles = () => __awaiter(void 0, void 0, void 0, function* () {
    electron_1.ipcMain.handle('get-number', () => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            const userInput = yield (0, electron_prompt_1.default)({
                title: 'Jogo do Número Secreto',
                label: 'Digite um número entre 1 e 10:',
                inputAttrs: {
                    type: 'number',
                    min: '1',
                    max: '10',
                },
                type: 'input',
            });
            return resolve(userInput);
        }));
    }));
    electron_1.ipcMain.handle('validate-number-secret', (event, secret) => __awaiter(void 0, void 0, void 0, function* () {
    }));
});
exports.default = ExposeHandles;
