
import { useEffect, useState } from "react";

export const Countries = () => {
    const [search, setSearch] = useState('')
    const [country, setCountry] = useState([])

  
   




    const handlQuery = () => {}
    
    

    function handleSearch(e) {
        setSearch(e.target.value);
        

        // setSearch()
        }

    //https://www.apicountries.com/countries

    async function getCountry() {


        try {

            const res = await fetch('https://studies.cs.helsinki.fi/restcountries/api/all')
            const data = await res.json()
            setCountry(data);
            
            
        } catch (error) {
            console.log(error);
            
            
        }

    }


    useEffect(() => {

        getCountry()

    }, [])

    

    return (
        <div className="">
            <h1>Countries Data Fetching</h1>
            <div className="">
                <form action="">
                    <input type="text" name="" id="" value={search} onChange={handleSearch} />
                    <button>Search</button>
                </form>
                <div className="">
                    {country.map((c) => (
                        <div className="">{c.name.common}</div>
                    ))}
                </div>
            </div>
        </div>
    )
} 