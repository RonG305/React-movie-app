import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
  const handleChange = (event) => {
    props.setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className="text-slate-200 md:w-3/4 h-10 rounded-xl bg-slate-700 flex px-4">
      <input
        className="w-full h-full bg-transparent outline-none"
        type="text"
        placeholder="Search movie or series..."
        onChange={handleChange}
        name="searchTerm"
        value={props.searchTerm}
      />
      <button onClick={handleClick}>
        <FaSearch size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
