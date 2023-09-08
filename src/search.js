import React, { useState } from 'react';
import './styles/search.scss'

function Search({ searchStatus }) {
    const [isClicked, setIsClicked] = useState(false);
    function containsOnlySpaces(input) {
        // Use a regular expression to check if the input contains only spaces
        return /^\s*$/.test(input);
    }
    function removeWhitespace(input) {
        return input.replace(/\s+/g, ' ');
    }
    var searchq = document.getElementById('search_news')

    const handleClick = () => {

        setIsClicked(true);
        if (containsOnlySpaces(document.getElementById('search_news').value)) {
            alert("Enter Job To Search")
        } else {
            searchq = removeWhitespace(document.getElementById('search_news').value)
            sessionStorage.setItem('search_news', searchq)
            console.log(searchq)
            sessionStorage.setItem('searchq', searchq)
            searchStatus(searchq)

            // window.location.assign("news/news.html")

        }
        setTimeout(() => {
            setIsClicked(false);
        }, 100);
    }

    return (
        <div className="search_box">
            <div id="search_container">
                <div id="search_input">

                    <input type="search" name="" id="search_news" />
                </div>
                <hr />
                <div id="search_btn" className={`button ${isClicked ? 'clicked' : ''}`}
                    onClick={handleClick}>
                    Search
                </div>

            </div>
        </div>
    )
}

export default Search