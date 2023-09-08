import './styles/result.scss'
import { useState } from 'react'
const Results = ({ jobs }) => {
    console.log(jobs)
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(12);
    function checkValue(value) {
        if (typeof value === 'string' && value.trim() === '') {
            return 'Confidential'; // Return null if the value is an empty string
        } else {
            return value; // Return the string if it's not empty
        }
    }
    function checkDescription(value) {
        if (value == null) {
            return 'No Description'
        } else {
            return value
        }
    }

    const [showText, setShowText] = useState('Show Description')

    function truncate(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.substring(0, maxLength) + "...";
        }
    }

    function capitalizeWords(sentence) {
        // Split the sentence into words
        const words = sentence.split(' ');

        // Capitalize the first letter of each word
        const capitalizedWords = words.map((word) => {
            if (word.length === 0) {
                return '';
            }
            const firstLetter = word[0].toUpperCase();
            const restOfWord = word.slice(1).toLowerCase();
            return firstLetter + restOfWord;
        });

        const capitalizedSentence = capitalizedWords.join(' ');

        return capitalizedSentence;
    }
    const indexOfFirstJob = (currentPage - 1) * jobsPerPage;
    const indexOfLastJob = indexOfFirstJob + jobsPerPage;

    // Get jobs for the current page
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    // Calculate the range of pagination buttons to display

    const totalPaginationButtons = Math.ceil(jobs.length / jobsPerPage);

    function redirect(x) {
        window.location.assign(x)
    }
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < totalPaginationButtons) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <>
            <div className='resultsContainer'>
                {currentJobs.map((job, index) => (
                    <div key={index} className="results_container">
                        <div className="bar"></div>
                        <div className="main">
                            <div className="role" onClick={() => redirect(job.link)}>{truncate(checkValue(capitalizeWords(job.role)), 30)}</div>
                            <div className="company" onClick={() => redirect(job.link)}>{truncate(checkValue(capitalizeWords(job.company)), 40)}</div>
                            {showText === 'Show Description' ? (
                                <div className="details" onClick={() => redirect(job.link)}>
                                    <div className="location">{checkValue(capitalizeWords(job.location))}</div>
                                    <div className="type">{checkValue(capitalizeWords(job.type))}</div>
                                    <div className="salary">{checkValue(job.salary)}</div>
                                </div>
                            ) : (
                                // alert('lk')
                                < div className='description'>{truncate(checkDescription(job.description), 200)}</div>
                            )}

                            <div className="function" onClick={() => redirect(job.link)}>Job Function {checkValue(capitalizeWords(job.job_function))}</div>
                            <div className="toogle" onClick={() => showText === 'Show Description' ? setShowText('Show Details') : setShowText('Show Description')}>{showText}</div>
                        </div>
                    </div>

                ))

                }
            </div >

            <div className="pagination">
                <div
                    className={`pagination-item ${currentPage === 1 ? 'disabled' : 'active'}`}
                    onClick={prevPage}
                >
                    Previous
                </div>
                <div>
                    {Array.from({ length: Math.min(3, totalPaginationButtons) }).map((_, index) => (
                        <div
                            key={index}
                            className={`pagination-items ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </div>
                    ))}
                    {totalPaginationButtons > 5 && <div className="pagination-ellipsis">...</div>}
                    {Array.from({ length: Math.min(1, totalPaginationButtons - 3) }).map((_, index) => (
                        <div
                            key={index + totalPaginationButtons - 2}
                            className={`pagination-items ${currentPage === totalPaginationButtons - 1 - index ? 'active' : ''}`}
                            onClick={() => paginate(totalPaginationButtons)}
                        >
                            {totalPaginationButtons + 1}
                        </div>
                    ))}
                </div>
                <div
                    className={`pagination-item ${currentPage === totalPaginationButtons ? 'disabled' : 'active'}`}
                    onClick={nextPage}
                >
                    Next
                </div>
            </div>
        </>
    )
}

export default Results