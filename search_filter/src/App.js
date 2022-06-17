import React from "react";
import './App.css'
// mackaroo api which gives dummy data
import JSONDATA from './MOCK_DATA.json'
import { useState } from 'react'

function App() {
  // Using UseState for the searchterm
  const [searchTerm, setSearchTerm] = useState("")
  // Whenever user searches for a name, searchterm gets updated
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className="App">
      <input value={searchTerm} onChange={handleChange} type="text" placeholder="Search for names"></input>
      {/* Mapping the data from Json file */}
      {JSONDATA.filter((val) => {
        if (searchTerm == "") return val
        else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) return val
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>)
      })}
    </div>
  );
}

export default App;
