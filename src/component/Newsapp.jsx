import React, { useEffect, useState } from 'react';
import Card from './Card';

function Newsapp(){
    const [search,setSearch]=useState("india");
    const [newsData,setNewsData]=useState(null);

    const API_KEY="d5544d19eb3c42108ce7bf5c9d3764ad";

    const getData=async()=>{
         const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
         const jsonData=await response.json();
         console.log(jsonData.articles);
         setNewsData(jsonData.articles);
    };

    useEffect(()=>{
        getData();
    },[]) // when it refresh first time it run only once

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)
        
    }

    const userInput = (event) =>{
        setSearch(event.target.value);
    }


    return(
        
            <div>
                <nav>
                    <div>
                        <h1>News Flash</h1>
                    </div>
                    
                    <div className='searchBar'>
                        <input type="text" value={search} placeholder='Search News'onChange={handleInput}/>
                        <button onClick={getData}>Search</button>
                    </div>
                </nav>

                <div>
                    <p className='head'>Search Update With Trendy News</p>
                </div>

                <div className='categoryBtn'>
                
                    <button onClick={userInput} value="sports">Sports</button>
                    <button onClick={userInput} value="politics">Politics</button>
                    <button onClick={userInput} value="entertainment">Entertainment</button>
                    <button onClick={userInput} value="health">Health</button>
                    <button onClick={userInput} value="fitness">Fitness</button>
                </div>

                <div>
                    <Card data={newsData}/>
                </div>

            </div>
        
    )
};

export default Newsapp;