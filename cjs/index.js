"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataCitysByStateAndCountry = exports.getDataCitys = exports.getDataStatesByCountry = exports.getDataStates = exports.getDataCountrys = exports.getFetchCode = exports.getRuteCitysByStateAndCountry = exports.getRuteCitys = exports.getRuteStatesByCountry = exports.getRuteStates = exports.getRuteCountryImg = exports.getRuteCountrys = exports.getRuteDir = exports.parseNameFolder = void 0;
const parseNameFolder = (e) => {
    return `${e.id}_${e.text}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .split(" ")
        .join("_")
        .replace(/[^a-zA-Z0-9_]/g, "");
};
exports.parseNameFolder = parseNameFolder;
const getRuteDir = () => {
    return (process?.env?.["NEXT_PUBLIC_CSC"] ??
        `https://country-state-city-nextjs.vercel.app`);
};
exports.getRuteDir = getRuteDir;
const getRuteCountrys = () => {
    return `${(0, exports.getRuteDir)()}/countrys.json`;
};
exports.getRuteCountrys = getRuteCountrys;
const getRuteCountryImg = (country) => {
    return `${(0, exports.getRuteDir)()}/country/${(0, exports.parseNameFolder)(country)}/img.png`;
};
exports.getRuteCountryImg = getRuteCountryImg;
const getRuteStates = () => {
    return `${(0, exports.getRuteDir)()}/states.json`;
};
exports.getRuteStates = getRuteStates;
const getRuteStatesByCountry = (country) => {
    return `${(0, exports.getRuteDir)()}/country/${(0, exports.parseNameFolder)(country)}/states.json`;
};
exports.getRuteStatesByCountry = getRuteStatesByCountry;
const getRuteCitys = () => {
    return `${(0, exports.getRuteDir)()}/citys.json`;
};
exports.getRuteCitys = getRuteCitys;
const getRuteCitysByStateAndCountry = (country, state) => {
    return `${(0, exports.getRuteDir)()}/country/${(0, exports.parseNameFolder)(country)}/${(0, exports.parseNameFolder)(state)}/citys.json`;
};
exports.getRuteCitysByStateAndCountry = getRuteCitysByStateAndCountry;
const getFetchCode = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
        else {
            return [];
        }
    }
    catch {
        return [];
    }
};
exports.getFetchCode = getFetchCode;
const getDataCountrys = async () => {
    return await (0, exports.getFetchCode)((0, exports.getRuteCountrys)());
};
exports.getDataCountrys = getDataCountrys;
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