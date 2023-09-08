import { useState } from "react";
function Component(props) {
    function redirect(x) {
        window.location.assign(x)
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
    return (
        <>
            <div key={props.index} className="results_container">
                <div className="bar"></div>
                <div className="main">
                    <div className="role" onClick={() => redirect(props.job.link)}>{truncate(checkValue(capitalizeWords(props.job.role)), 30)}</div>
                    <div className="company" onClick={() => redirect(props.job.link)}>{truncate(checkValue(capitalizeWords(props.job.company)), 40)}</div>
                    {showText === 'Show Description' ? (
                        <div className="details" onClick={() => redirect(props.job.link)}>
                            <div className="location">{checkValue(capitalizeWords(props.job.location))}</div>
                            <div className="type">{checkValue(capitalizeWords(props.job.type))}</div>
                            <div className="salary">{checkValue(props.job.salary)}</div>
                        </div>
                    ) : (
                        // alert('lk')
                        < div className='description'>{truncate(checkDescription(props.job.description), 200)}</div>
                    )}

                    <div className="function" onClick={() => redirect(props.job.link)}>Job Function {checkValue(capitalizeWords(props.job.job_function))}</div>
                    <div className="toogle" onClick={() => showText === 'Show Description' ? setShowText('Show Details') : setShowText('Show Description')}>{showText}</div>
                </div>
            </div>
        </>
    )
}

export default Component