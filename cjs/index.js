"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataCitysByStateAndCountry = exports.getDataCitys = exports.getDataStatesByCountry = exports.getDataStates = exports.getDataCountrysWithImg = exports.getDataCountrys = exports.getFetchCode = exports.getRuteCitysByStateAndCountry = exports.getRuteCitys = exports.getRuteStatesByCountry = exports.getRuteStates = exports.getRuteCountrysWithImg = exports.getRuteCountrys = exports.getRuteDir = exports.parseNameFolder = exports.loadCitys = exports.loadStates = exports.loadCountrysWidthImg = exports.loadCountrys = void 0;
const loadCountrys = async () => {
    const { countrys } = await Promise.resolve().then(() => __importStar(require("./country")));
    return countrys;
};
exports.loadCountrys = loadCountrys;
const loadCountrysWidthImg = async () => {
    const { countrys } = await Promise.resolve().then(() => __importStar(require("./country_img")));
    return countrys;
};
exports.loadCountrysWidthImg = loadCountrysWidthImg;
const loadStates = async () => {
    const { states } = await Promise.resolve().then(() => __importStar(require("./state")));
    return states;
};
exports.loadStates = loadStates;
const loadCitys = async () => {
    const { citys } = await Promise.resolve().then(() => __importStar(require("./city")));
    return citys;
};
exports.loadCitys = loadCitys;
const parseNameFolder = (e) => {
    return `${e.id}_${e.text}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .split(" ")
        .join("_")
        .split(",")
        .join("")
        .split("'")
        .join("");
};
exports.parseNameFolder = parseNameFolder;
const getRuteDir = () => {
    return `https://country-state-city-nextjs.vercel.app/`;
};
exports.getRuteDir = getRuteDir;
const getRuteCountrys = () => {
    return `${(0, exports.getRuteDir)()}/country/index.js`;
};
exports.getRuteCountrys = getRuteCountrys;
const getRuteCountrysWithImg = () => {
    return `${(0, exports.getRuteDir)()}/country_img.js`;
};
exports.getRuteCountrysWithImg = getRuteCountrysWithImg;
const getRuteStates = () => {
    return `${(0, exports.getRuteDir)()}/state/index.js`;
};
exports.getRuteStates = getRuteStates;
const getRuteStatesByCountry = (country) => {
    return `${(0, exports.getRuteDir)()}/country/${(0, exports.parseNameFolder)(country)}/states.js`;
};
exports.getRuteStatesByCountry = getRuteStatesByCountry;
const getRuteCitys = () => {
    return `${(0, exports.getRuteDir)()}/city/index.js`;
};
exports.getRuteCitys = getRuteCitys;
const getRuteCitysByStateAndCountry = (country, state) => {
    return `${(0, exports.getRuteDir)()}/country/${(0, exports.parseNameFolder)(country)}/${(0, exports.parseNameFolder)(state)}/citys.js`;
};
exports.getRuteCitysByStateAndCountry = getRuteCitysByStateAndCountry;
const getFetchCode = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
        const text = await response.text();
        const resultado = text.replaceAll("\n", "").match(/\[(.*?)\]/)?.[0];
        return eval(resultado ?? "[]");
    }
    else {
        throw new Error(`Error fetching ${url}: ${response.statusText}`);
    }
};
exports.getFetchCode = getFetchCode;
const getDataCountrys = async () => {
    return await (0, exports.getFetchCode)((0, exports.getRuteCountrys)());
};
exports.getDataCountrys = getDataCountrys;
const getDataCountrysWithImg = async () => {
    return await (0, exports.getFetchCode)((0, exports.getRuteCountrysWithImg)());
};
exports.getDataCountrysWithImg = getDataCountrysWithImg;
const getDataStates = async () => {
    return await (0, exports.getFetchCode)((0, exports.getRuteStates)());
};
exports.getDataStates = getDataStates;
const getDataStatesByCountry = async (country) => {
    return await (0, exports.getFetchCode)((0, exports.getRuteStatesByCountry)(country));
};
exports.getDataStatesByCountry = getDataStatesByCountry;
const getDataCitys = async () => {
    return await (0, exports.getFetchCode)((0, exports.getRuteCitys)());
};
exports.getDataCitys = getDataCitys;
const getDataCitysByStateAndCountry = async (country, state) => {
    return await (0, exports.getFetchCode)((0, exports.getRuteCitysByStateAndCountry)(country, state));
};
exports.getDataCitysByStateAndCountry = getDataCitysByStateAndCountry;
//# sourceMappingURL=index.js.map