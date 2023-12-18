import React , { useState } from 'react'
import './Header.css'
import { Link,useNavigate  } from 'react-router-dom'
const Header=()=>{
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate ();

    const handleSearch = () => {
        // Navigate to a search results page or perform search logic here
        if (searchQuery.trim() !== '') {
            navigate(`/search/${searchQuery}`);
          }
      };
    return (
        <div className='header'>
        <div className='headerLeft'>
            <Link to='/'><img className='header_icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' alt=''></img></Link>
            <Link to='/movies/popular' style={{textDecoration:"none"}}><span>Popular</span></Link>
            <Link to='/movies/top_rated' style={{textDecoration:"none"}}><span>Top Rated</span></Link>
            <Link to='/movies/upcoming' style={{textDecoration:"none"}}><span>Upcoming</span></Link>
            <input
      type='text'
      placeholder='Search movies...'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
     {/* Add a search button or icon */}
     <button onClick={handleSearch}>Search</button>

        </div>
        </div>
    )
}

export default Header;
