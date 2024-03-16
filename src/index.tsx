export interface countryProps {
    id: number;
    text: string;
    code: string;
    img?: string;
}

export const loadCountrys = async () => {
    const { countrys }: { countrys: countryProps[] } = await import(
        "./country"
    );
    return countrys;
};
export const loadCountrysWidthImg = async () => {
    const { countrys }: { countrys: countryProps[] } = await import(
        "./country_img"
    );
    return countrys;
};

export interface stateProps {
    id: number;
    text: string;
    id_country: number;
}
export const loadStates = async () => {
    const { states }: { states: stateProps[] } = await import("./state");
    return states;
};

export interface cityProps {
    id: number;
    text: string;
    id_state: number;
    id_country: number;
    nameAve?: string | undefined;
}
export const loadCitys = async () => {
    const { citys }: { citys: cityProps[] } = await import("./city");
    return citys;
};

export const parseNameFolder = (e: { text: string; id: number }) => {
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

export const getRuteDir = () => {
    return `https://country-state-city-nextjs.vercel.app`;
};

export const getRuteCountrys = () => {
    return `${getRuteDir()}/country/index.js`;
};
export const getRuteCountrysWithImg = () => {
    return `${getRuteDir()}/country_img.js`;
};
export const getRuteStates = () => {
    return `${getRuteDir()}/state/index.js`;
};

export const getRuteStatesByCountry = (country: {
    text: string;
    id: number;
}) => {
    return `${getRuteDir()}/country/${parseNameFolder(country)}/states.js`;
};
export const getRuteCitys = () => {
    return `${getRuteDir()}/city/index.js`;
};

export const getRuteCitysByStateAndCountry = (
    country: {
        text: string;
        id: number;
    },
    state: {
        text: string;
        id: number;
    }
) => {
    return `${getRuteDir()}/country/${parseNameFolder(
        country
    )}/${parseNameFolder(state)}/citys.js`;
};

export const getFetchCode = async (url: string) => {
    const response = await fetch(url);
    if (response.ok) {
        const text = await response.text();

        const resultado = text.replaceAll("\n", "").match(/\[(.*?)\]/)?.[0];

        return eval(resultado ?? "[]");
    } else {
        throw new Error(`Error fetching ${url}: ${response.statusText}`);
    }
};

export const getDataCountrys = async () => {
    return await getFetchCode(getRuteCountrys());
};
export const getDataCountrysWithImg = async () => {
    return await getFetchCode(getRuteCountrysWithImg());
};
export const getDataStates = async () => {
    return await getFetchCode(getRuteStates());
};
export const getDataStatesByCountry = async (country: {
    text: string;
    id: number;
}) => {
    return await getFetchCode(getRuteStatesByCountry(country));
};
export const getDataCitys = async () => {
    return await getFetchCode(getRuteCitys());
};
export const getDataCitysByStateAndCountry = async (
    country: {
        text: string;
        id: number;
    },
    state: {
        text: string;
        id: number;
    }
) => {
    return await getFetchCode(getRuteCitysByStateAndCountry(country, state));
};
