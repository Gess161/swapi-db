export default function arrayToObj(films: any){
    let obj= {};
    for(let i = 0; i < films.length; i++){
        obj = {
            ...obj,
            [films[i].episode_id]: films[i] 
        }
    }
    return obj;
};