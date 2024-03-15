
// import {getRuteDir, getRuteStatesByCountry} from '../src'
import {getRuteDir, getRuteStatesByCountry} from '../cjs'

const main = async () => {
    const result = getRuteStatesByCountry({id:82,text:"Colombia"})
    console.log(result);
    

    console.log(getRuteDir());
    
}
main()