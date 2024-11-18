import { countrys } from "../src/_country";
import { countrys as countrysLang } from "../src/_lang";

const main = async () => {
    const countryOK  : any= []
    const countryNone  : any= []
    for (let i = 0; i < countrys.length; i++) {
        const country = countrys[i];
        const countryLang = countrysLang.find(e=>e.id == country.id && e.text ==country.text && e.lang != undefined)
        if(countryLang){
            countryOK.push({
                ...country,
                lang : countryLang.lang
            })
        }else{
            countryNone.push(country)
        }
    }
    console.log(countryNone);
    
    await Bun.write(
        "./countr_lang.json",
        `${JSON.stringify(countryOK)}`,
        { createDirs: true }
    );
};
main();
