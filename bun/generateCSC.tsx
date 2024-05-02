import { countrys } from "../src/_country";
import { countrys as country_img } from "../src/country_img";
import { states } from "../src/_state";
import { citys } from "../src/_city";
import Bun from "bun";
import fs from "fs";

const main = async () => {
    const parseName = (e: { text: string; id: number }) => {
        return `${e.id}_${e.text}`
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .split(" ")
            .join("_")
            .replace(/[^a-zA-Z0-9_]/g, "");
    };
    await Bun.write(
        "./json/index.json",
        `${JSON.stringify({
            countrys: "/countrys.json",
            states: "/states.json",
            citys: "/citys.json",
            statesByCountry: "/country/${countryName}/states.json",
            citysByCountry:
                "/country/${countryName}/citys.json",
            citysByCountryAndState:
                "/country/${countryName}/${stateName}/citys.json",
        })}`,
        { createDirs: true }
    );
    await Bun.write("./json/countrys.json", `${JSON.stringify(countrys)}`, {
        createDirs: true,
    });
    await Bun.write("./json/states.json", `${JSON.stringify(states)}`, {
        createDirs: true,
    });
    await Bun.write("./json/citys.json", `${JSON.stringify(citys)}`, {
        createDirs: true,
    });
    
    for (let i = 0; i < countrys.length; i++) {
        const country = countrys[i];
        const countryName = parseName(country);
        const statesCountry = states.filter((s) => s.id_country == country.id);

        const img = (country_img[i]?.img ?? "").replace(/^data:image\/png;base64,/, "");
        const imgUrl = `./json/country/${countryName}/img.png`;
        await Bun.write(
            imgUrl,
            img,
            { createDirs: true ,base64:true}
        );
        await fs.writeFile(imgUrl, img,"base64",console.log);

        const citysCountry :any = []

        for (let j = 0; j < statesCountry.length; j++) {
            const state = statesCountry[j];
            const citysStates = citys.filter((s) => s.id_state == state.id);
            citysCountry.push(citysStates)
            const stateName = parseName(state);
            const stateFileJson = `./json/country/${countryName}/${stateName}/citys.json`;
            await Bun.write(stateFileJson, `${JSON.stringify(citysStates)}`);
        }
        const countryFileStateJson = `./json/country/${countryName}/states.json`;
        const countryFileCityJson = `./json/country/${countryName}/citys.json`;

        await Bun.write(
            countryFileStateJson,
            `${JSON.stringify(statesCountry)}`
        );
        await Bun.write(
            countryFileCityJson,
            `${JSON.stringify(citysCountry)}`
        );
    }
};
main();
