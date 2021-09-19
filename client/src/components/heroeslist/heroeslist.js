import React from 'react'
import './heroeslist.css'
import { NavLink } from 'react-router-dom'

export default (props) => {
  const { heroes } = props

  return (
    <ul className="heroesList">
      {heroes.map(hero => <li key={hero.slug}><NavLink to={`/heroes/${hero.slug}`}>{hero.name}</NavLink></li>)}
    </ul>
  )
}