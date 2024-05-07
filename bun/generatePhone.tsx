import { countrys } from "../src/_country";
import { countrys as countrysPhone } from "../src/_phone";

import Bun from "bun";
import fs from "fs";

const main = async () => {
    const parseName = (e: string) => {
        return `${e}`
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "").toLowerCase()
    };
    const ContentJoin : any = []
    const ContentNotJoin  : any= []
    for (let i = 0; i < countrys.length; i++) {
        const country = countrys[i];
        let sw = false
        for (let j = 0; j < countrysPhone.length; j++) {
            const phone = countrysPhone[j];
            if(phone.text == country.text && phone.code == country.code){
                ContentJoin.push({
                    ...country,
                    code_phone:phone.code_phone
                })
                sw = true
                break
            }
        }
        if(!sw){

            ContentNotJoin.push(
                country,
                
            )
        }
    }
    await Bun.write(
        "./bun/ContentJoin.json",
        `${JSON.stringify(ContentJoin)}`,
        { createDirs: true }
    );
    await Bun.write(
        "./bun/ContentNotJoin.json",
        `${JSON.stringify(ContentNotJoin)}`,
        { createDirs: true }
    );
    
};
main();
