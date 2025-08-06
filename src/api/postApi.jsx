import axios from "axios"

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

//create function which will use get methode

// HTTP get method

export const getCountryData = () =>{
    return api.get("/all?fields=name,population,region,capital,flags");
}

//get method for individuale country name



export const getCountryIndData = (name) =>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
 );
}
