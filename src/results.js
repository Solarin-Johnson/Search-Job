import './styles/result.scss'
import { useState } from 'react'
import Component from './components'
const Results = ({ jobs }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(12);


    const indexOfFirstJob = (currentPage - 1) * jobsPerPage;
    const indexOfLastJob = indexOfFirstJob + jobsPerPage;

    // Get jobs for the current page
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    // Calculate the range of pagination buttons to display

    const totalPaginationButtons = Math.ceil(jobs.length / jobsPerPage);


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
                    <Component job={job} index={index} />
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
                            {totalPaginationButtons - 1}
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