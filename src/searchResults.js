import React, { useState, useEffect } from 'react';
import Results from './results'
import './styles/searchResults.scss'
import './styles/result.scss'
import './styles/search.scss'

function SearchResults(props) {
    const [jobs, setJobs] = useState([])
    var [searchInput, setSearchInput] = useState(props.search)

    const [isClicked, setIsClicked] = useState(false);
    function containsOnlySpaces(input) {
        // Use a regular expression to check if the input contains only spaces
        return /^\s*$/.test(input);
    }
    function removeWhitespace(input) {
        return input.replace(/\s+/g, ' ');
    }
    var searchq = document.getElementById('search_news')
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleClick = () => {

        setIsClicked(true);
        if (containsOnlySpaces(document.getElementById('search_news').value)) {
            alert("Enter Job To Search")
        } else {
            searchq = removeWhitespace(document.getElementById('search_news').value)
            sessionStorage.setItem('search_news', searchq)
            console.log(searchq)
            sessionStorage.setItem('searchq', searchq)
            fetchResults()
            // window.location.assign("news/news.html")

        }
        setTimeout(() => {
            setIsClicked(false);
        }, 100);
    }




    function fetchResults() {
        // Replace this URL with your actual API endpoint
        const apiUrl = `https://seniorintern-1-a9749386.deta.app/job/search/${searchInput}`;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Update the state with the fetched data
                setJobs(data);
                console.log(jobs)

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        setTimeout(() => {
            setWaitText('No Jobs found')
        }, 10000);
        fetchResults()
    }, []); // The empty dependency array means this effect runs once on component mount

    const [waitText, setWaitText] = useState('Please wait')
    const waiter = () => {
        alert('kk')

    }



    return (
        <div id="results">
            <div id="_search_container">
                <div id="search_input">

                    <input type="search" value={searchInput} onChange={handleChange} name="" id="search_news" />
                </div>
                <hr />
                <div id="search_btn" className={`button ${isClicked ? 'clicked' : ''}`}
                    onClick={handleClick}>
                    Search
                </div>

            </div>
            {jobs.length > 0 ? (
                <Results jobs={jobs} />
            ) : (
                <p onLoadStart={() => waiter}>{waitText}</p>
            )}
        </div>
    )
}

export default SearchResults