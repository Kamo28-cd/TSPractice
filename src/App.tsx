import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string,
    url: string,
    age: number,
    note?: string
  }[]
  women: {
    name: string,
    surname: string,
    email: string,
    number: number
  }[]

}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "",
      age: 36,
      note: "Hes a great ball player"
    }
  ])
  const [women, setWomen] = useState<IState["women"]>([])


  return (
    <div className="App">
      <h1>People invited</h1>
      <List people={people} women={women}/>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
