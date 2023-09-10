import { useEffect, useState } from 'react';
import './styles/searchResults.scss';
import _AllResults from './_AllResults';

function AllResults() {
    const [jobs, setJobs] = useState([])
    const [waitText, setWaitText] = useState('Please wait')

    function fetchResults(x) {
        // Replace this URL with your actual API endpoint
        const apiUrl = `https://seniorintern-1-a9749386.deta.app/jobs?page=${x}`;

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
            setWaitText('No Jobs found, Check your query or Internet Connection')
        }, 10000);
        for (var i = 1; i < 2; i++) {
            fetchResults(i)
        }
    }, [])
        ; // The empty dependency array means this effect runs once on component mount
    return (
        <>
            {jobs.length > 0 ? (
                <_AllResults jobs={jobs} />
            ) : (
                <p>{waitText}</p>
            )}
        </>
    )
}

export default AllResults