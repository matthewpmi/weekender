import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PackingList(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
    findTrip();
  }, []);

  function findTrip() {
    //console.log(props.user)
  }

  function getList() {
    axios.get(`/packing/list/642360a9fe014d9942e40212`)
      .then(({ data }) => {
        console.log(data)
        setList(data.packingList)
      })
      .catch((err) => {
        console.error('Could not GET packing list:', err)
      })
  }

  //setList(list => [...list, data.packingList])

  console.log(list)

  const logout = () => {
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

  return (

    <div className="newTripPage">
      <h1 className="weekendertext">
        <Link to="/" style={{ textDecoration: 'none', textEmphasisColor: 'white' }}>WEEKENDER </Link>
        <button className='logoutButton' onClick={(logout)}>Log Out</button>
        <h3 className='welcome'>PACKING LIST PAGE</h3>
      </h1>
      <div className='packing-container'>
        <ul className='packing-list'>
          {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  )

};

export default PackingList