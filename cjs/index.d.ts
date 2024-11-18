export interface countryProps {
    id: number;
    text: string;
    code: string;
    img?: string;
    code_phone?: string;
    lang?: string;
}
export interface stateProps {
    id: number;
    text: string;
    id_country: number;
}
export interface cityProps {
    id: number;
    text: string;
    id_state: number;
    id_country: number;
    nameAve?: string | undefined;
}
export declare const parseNameFolder: (e: {
    text: string;
    id: number;
}) => string;
export declare const getRuteDir: () => string;
export declare const getRuteCountrys: () => string;
export declare const getRuteCountryImg: (country: {
    text: string;
    id: number;
}) => string;
export declare const getRuteStates: () => string;
export declare const getRuteStatesByCountry: (country: {
    text: string;
    id: number;
}) => string;
export declare const getRuteCitys: () => string;
export declare const getRuteCitysByCountry: (country: {
    text: string;
    id: number;
}) => string;
export declare const getRuteCitysByStateAndCountry: (country: {
    text: string;
    id: number;
}, state: {
    text: string;
    id: number;
}) => string;
export declare const getFetchCode: (url: string) => Promise<any>;
export declare const getDataCountrys: () => Promise<any>;
export declare const getDataStates: () => Promise<any>;
export declare const getDataStatesByCountry: (country: {
    text: string;
    id: number;
}) => Promise<any>;
export declare const getDataCitys: () => Promise<any>;
export declare const getDataCitysByCountry: (country: {
    text: string;
    id: number;
}) => Promise<any>;
export declare const getDataCitysByStateAndCountry: (country: {
    text: string;
    id: number;
}, state: {
    text: string;
    id: number;
}) => Promise<any>;
