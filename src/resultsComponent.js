function ResultsComponent(props) {
    return (
        <div className="results_container">
            <div className="bar"></div>
            <div className="main">
                <div className="role">{props.company}</div>
                <div className="company">Jobberman (Third Party Recruitment)</div>
                <div className="details">
                    <div className="location">Remote (Work From Home)</div>
                    <div className="type">Full Time</div>
                    <div className="salary">NGN Confidential</div>
                </div>
                <div className="function">Job Function : Software & Data</div>
                <div className="toogle">Show Description</div>
            </div>
        </div>
    )
}

export default ResultsComponent