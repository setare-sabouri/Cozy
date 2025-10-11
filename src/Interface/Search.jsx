import { useState } from 'react';
import styles from './Interface.module.scss';
import { useStore } from '../Store/useStore';

const Search = () => {
  const [name, setName] = useState("");
  const { setCityName, fetchWeather, isLoading, error } = useStore();

  function handleChange(e) {
    setName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    setCityName(name);

    await fetchWeather(name);

    setName('');
  }


  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        id="search"
        type="text"
        placeholder="Search City"
        value={name}
        onChange={handleChange}
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading || !name.trim()}>
        {isLoading ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
};

export default Search;

