import { useState } from 'react';
import styles from './Interface.module.scss'
import { useStore } from '../Store/useStore';

const Search = () => {
  const [name, setName] = useState("");
  const { setCityName, CityName } = useStore((state) => state)

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCityName(name)
    setName('')
  }

  return (
    <>
      <form className={styles.searchForm} onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Search City"
            value={name}
            onChange={handleChange}
          />
        
        <input type="submit" />
      </form>
    </>

  )
}

export default Search
