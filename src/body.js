import React, { useState } from 'react';
import './styles/body.scss'
import SearchAll from './NoSearch';
import Search from './search'
import SearchResults from './searchResults'
import About from './About'
import Home from './Home'
import AllResults from './AllResults';

function Body() {
    // const searchq = document.getElementById('search_news')
    const [search, setSearch] = useState(false)
    const [searched, setSearched] = useState('')
    const [_searchAll, setSearchAll] = useState(false)
    const searchedValue = (data) => {
        setSearch(true)
        setSearched(data)
    }
    const searchAll = (data) => {
        setSearchAll(true)
    }

    return (
        <>
            {search ? (
                <SearchResults search={searched} />
            ) : (_searchAll ? (
                <AllResults />
            ) : (
                <div id="body">
                    <Home />
                    <Search searchStatus={searchedValue} />
                    <SearchAll searchAll={searchAll} />
                    <About />
                </div>
            )
            )}

        </>
    )
}

export default Body;