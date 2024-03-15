import { countrys } from "../src/_country";
import { states } from "../src/_state";
import { citys } from "../src/_city";
import Bun from "bun";

const main = async () => {
    const parseName = (e: { text: string; id: number }) => {
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

    // const file = Bun.file("./src/country/index.tsx")
    await Bun.write(
        "./src/country/index.tsx",
        `export const countrys = ${JSON.stringify(countrys)}`,
        { createDirs: true }
    );

    const listExportStates: string[] = [];
    const listExportCity: string[] = [];

    for (let i = 0; i < countrys.length; i++) {
        const country = countrys[i];
        const countryName = parseName(country);
        const statesCountry = states.filter((s) => s.id_country == country.id);
        const listExportCitysByCountry: string[] = [];
        for (let j = 0; j < statesCountry.length; j++) {
            const state = statesCountry[j];
            const citysStates = citys.filter((s) => s.id_state == state.id);

            const stateName = parseName(state);
            const stateFile = `./src/country/${countryName}/${stateName}/citys.tsx`;
            console.log(stateFile);

            listExportCitysByCountry.push(
                `import {citys as citys_${country.id}_${state.id}} from "./${stateName}/citys";`
            );

            await Bun.write(
                stateFile,
                `export const citys = ${JSON.stringify(citysStates)}`
            );
        }
        const countryFileState = `./src/country/${countryName}/states.tsx`;
        const countryFileCity = `./src/country/${countryName}/citys.tsx`;

        listExportStates.push(
            `import {states as states_${country.id}} from "../country/${countryName}/states";`
        );
        listExportCity.push(
            `import {citys as citys_${country.id}} from "../country/${countryName}/citys";`
        );

        await Bun.write(
            countryFileState,
            `export const states = ${JSON.stringify(statesCountry)}`
        );
        await Bun.write(
            countryFileCity,
            `${listExportCitysByCountry.join("\n")}
            export const citys = [
                ${statesCountry
                    .map((e) => `...citys_${country.id}_${e.id},`)
                    .join("\n")}
            ]`,
            { createDirs: true }
        );
    }
    await Bun.write(
        "./src/state/index.tsx",
        `${listExportStates.join("\n")}
        export const states = [
            ${countrys.map((e) => `...states_${e.id},`).join("\n")}
        ]`,
        { createDirs: true }
    );
    await Bun.write(
        "./src/city/index.tsx",
        `${listExportCity.join("\n")}
        export const citys = [
            ${countrys.map((e) => `...citys_${e.id},`).join("\n")}
        ]`,
        { createDirs: true }
    );
};
main();
