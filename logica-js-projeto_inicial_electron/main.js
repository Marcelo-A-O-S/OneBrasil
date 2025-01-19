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
const path_1 = __importDefault(require("path"));
const handlers_1 = __importDefault(require("./handlers"));
const CreateWindow = () => __awaiter(void 0, void 0, void 0, function* () {
    const mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: `${path_1.default.join(__dirname, 'preload.js')}`
        },
        icon: `${path_1.default.join(__dirname, 'img/trophy.png')}`
    });
    mainWindow.loadURL(`file://${path_1.default.resolve(__dirname, 'index.html')}`);
    mainWindow.maximize();
    yield (0, handlers_1.default)();
});
electron_1.app.on('activate', () => __awaiter(void 0, void 0, void 0, function* () {
    if (window == null) {
        yield CreateWindow();
    }
}));
electron_1.app.on('ready', () => __awaiter(void 0, void 0, void 0, function* () {
    yield CreateWindow();
}));
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
