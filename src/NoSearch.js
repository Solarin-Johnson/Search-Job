import { useState } from "react";
import './styles/search.scss'
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
        <div id="noSearch">
            <div id="or">
                <div>Or</div>
                <hr />
            </div>
            <div className={`searchAll ${isClicked ? 'clicked' : ''}`} onClick={handleClick} >Explore All Available Job Listings</div>
        </div>
    )
}
export default SearchAll