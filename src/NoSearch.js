import { useState } from "react";

function SearchAll({ searchAll }) {
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () => {

        setIsClicked(true);
        searchAll(true)

        setTimeout(() => {
            setIsClicked(false);
        }, 100);
    }
    return (
        <>
            <div id="or">
                <div>Or</div>
                <hr />
            </div>
            <div className={`searchAll ${isClicked ? 'clicked' : ''}`} onClick={handleClick} >Explore All Available Job Listings</div>
        </>
    )
}
export default SearchAll