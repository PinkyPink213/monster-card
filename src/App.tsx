import SearchBox from "components/search-box/search-box.component";
import CardList from "components/card-list/card-list.component";
import { useState, useEffect } from "react";
import { getData } from "utils/fetch.utils";
import { ChangeEvent} from 'react';

export type Monster = {
  id: string;
  name: string;
  email: string;
  website: string;
}

function App() {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState <Monster[]>([]);
  const [filterMonsters,setFileterMonsters]= useState(monsters);

  const onSearchChange = (event:ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
    // console.log(searchField)
  }
  //Calling only one time on mount
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((response) => response.json())
    // .then((users) =>
    //   setMonsters(users)
    // );
    const fetchUsers = async()=> {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }
    fetchUsers();
  }, [])

  useEffect(()=>{
    const newFilterMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });
      setFileterMonsters(newFilterMonsters)
  },[monsters,searchField])
  
  return (
    <div className="App">
      <h1 className="app-title"> Monster Card</h1>
      <SearchBox className={'monster-search-box'} onChangeHandler={onSearchChange} placeholder={'search monsters'} />
      <CardList monsters={filterMonsters} />
    </div>
  );

}

export default App;
