import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default (props) => {
  const [hero, setHero] = useState({})
  const { heroSlug } = props.match.params

  useEffect(() => {
    const fetchHero = async () => {
      let { data } = await axios.get(`http://localhost:1337/api/heroes/${heroSlug}`);

      setHero(data);
    };

    fetchHero();
  }, []);


  return (
    <div className="page">
      <div className="title">Hero Information</div>
      <div className="subtitle">
        Details about our hero.
      </div>
      <strong>Name: </strong>
      <span>{hero.name}</span>
      <br />
      <strong>Real Name: </strong>
      <span>{hero.realname}</span>
      <br />
      <strong>First Appearance: </strong>
      <span>{hero.firstappearance}</span>
      <br />
      <NavLink to="/">Go Back</NavLink>
    </div>
  )
}