import Component from "./components"

function ReturnAllResults(props) {
    // console.log(props.jobs)
    return (
        <div className='resultsContainer'>
            {props.jobs.map((job, index) => (
                <Component key={index} job={job} index={index} />
            ))

            }
        </div >
    )
}

export default ReturnAllResults