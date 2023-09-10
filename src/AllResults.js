import { useEffect, useState } from 'react';
import './styles/result.scss';
import './styles/ReturnAllResults.scss';
import ReturnAllResults from './ReturnAllResults';

function AllResults() {
    const [jobs, setJobs] = useState([])
    const [waitText, setWaitText] = useState('Please wait')
    const [page, setPage] = useState(1)

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
                setJobs(data.data);
                console.log(data.data)

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        fetchResults(page)
        setTimeout(() => {
            setWaitText('No Jobs found, Check your query or Internet Connection')
        }, 10000);
    }, [])
        ; // The empty dependency array means this effect runs once on component mount
    return (
        <div id="allResults">

            {jobs.length > 0 ? (
                <>
                    <ReturnAllResults jobs={jobs} />
                    <div id='pagination'>
                        <div className={`buttton ${currentPage === 1 ? 'disabled' : 'active'}`}
                            onClick={prevPage}>

                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </>
            ) : (
                <p>{waitText}</p>
            )}
        </div>
    )
}

export default AllResults