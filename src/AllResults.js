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
        const apiUrl = `${process.env.REACT_APP_API_URL_ALL}=${x}`;

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

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        waiter()
        fetchResults(page)
    }, [])

    function waiter() {
        setTimeout(() => {
            setWaitText('There was an Error Fetching Results, Please Check your Internet Connection')
        }, 10000);
    }

    const nextPage = () => {
        if (page < 150) {
            setJobs([])
            setPage(page + 1);
            fetchResults(page)
            setWaitText('Please Wait')
            waiter()
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
            fetchResults(page)
            setWaitText('Please Wait')
            waiter()
        }
    };
    return (
        <div id="allResults">

            {jobs.length > 0 ? (
                <>
                    <ReturnAllResults jobs={jobs} />
                    <div className='pagination'>
                        <div className={`pagination-item ${page === 1 ? 'disabled' : 'active'}`}
                            onClick={prevPage}>
                            Previous
                        </div>
                        <div id='indicator'>
                            Page {page} of 150
                        </div>
                        <div className={`pagination-item ${page === 150 ? 'disabled' : 'active'}`}
                            onClick={nextPage}>
                            Next
                        </div>
                    </div>
                </>
            ) : (
                <p>{waitText}</p>
            )}
        </div>
    )
}

export default AllResults