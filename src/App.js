import SearchBox from "components/search-box/search-box.component";
import CardList from "components/card-list/card-list.component";
import { useState, useEffect } from "react";
function App() {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
    // console.log(searchField)
  }
  //Calling inly ont time on mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) =>
      setMonsters(users)
    );
  }, [])

  const filterMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div className="App">
      <h1 className="app-title"> Monster Card</h1>
      <SearchBox className={'monster-search-box'} onChangeHandler={onSearchChange} placeHolder={'search monsters'} />
      <CardList monsters={filterMonsters} />
    </div>
  );

}

export default App;
