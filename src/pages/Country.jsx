import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/UI/CountryCard";

export const Country = ()=>{

    const [isPending , startTransition ] = useTransition() // update the state without disturbing the UI
    const [countries, setCountries] = useState([])

    useEffect(()=>{


        startTransition(async () =>{
            const res =await getCountryData();
            setCountries(res.data);
        })


    },[])

    if(isPending) return <Loader/>;

    //step 1 fetch the data and show the card
    return(
       <section className="country-section">

         {/*//whenever working with Cards this is the best way to do it */}
        <ul className="grid grid-four-cols">
            {
                countries.map((curCountry,index)=>{
                    return <CountryCard country = {curCountry} key ={index} />
                })
            }


        </ul>
       </section>

    );
}