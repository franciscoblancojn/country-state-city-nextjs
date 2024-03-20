
import {getRuteDir, getDataStatesByCountry} from '../src'
// import {getRuteDir, getDataStatesByCountry} from '../cjs'

const main = async () => {
    const result = await getDataStatesByCountry({id:82,text:"Colombia"})
    console.log(result);
    

    console.log(getRuteDir());
    
}
main()