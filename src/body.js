import React, { useState } from 'react';
import './styles/body.scss'
import Search from './search'
import SearchResults from './searchResults'
import About from './About'
import Home from './Home'


function Body() {
    // const searchq = document.getElementById('search_news')
    const [search, setSearch] = useState(false)
    const [searched, setSearched] = useState('')
    const searchedValue = (data) => {
        setSearch(true)
        console.log(data)
        setSearched(data)
    }

    return (
        <>
            {search ? (
                <SearchResults search={searched}/>
            ) : (
                <div id="body">
                    <Home />
                    <Search searchStatus={searchedValue} />
                    <About />
                </div>
            )}

        </>
    )
}

export default Body;