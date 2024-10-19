import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsers } from '../../store/userSlice'; // Assuming you'll implement this action

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  // Fetch users from Redux store
  const users = useSelector((state) => state.user.followedUsers); 

  const handleSearch = (e) => {
    e.preventDefault();
    // Dispatch action to search users
    dispatch(searchUsers(query));
    
    // Filter users based on the query
    const results = users.filter(user => user.username.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <div className="relative max-w-lg">
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search users..."
          className="w-full border border-gray-300 rounded-l-md p-2"
        />
        <button 
          type="submit" 
          className="bg-[#433878] text-white px-4 rounded-r-md hover:bg-[#7E60BF]"
        >
          Search
        </button>
      </form>

      {/* Search Results */}
      {query && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg mt-2 rounded-md border border-gray-300 z-10">
          {searchResults.length > 0 ? (
            <ul className="list-disc p-2">
              {searchResults.map(user => (
                <li key={user.id} className="p-2 border-b border-gray-200">
                  {user.username}
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-2 text-gray-600">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
