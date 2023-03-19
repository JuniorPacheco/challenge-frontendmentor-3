import React from 'react'
import "./styles/CountryCard.css"

const CountryCard = ({country}) => {
  return (
    <article className='countryCard'>
      <div className='countryCard__img'>
        <img src={country.flags.svg} alt="" />
      </div>
      <section className='countryCard__info'>
        <h3 className='countryCard__name'>{country.name.common}</h3>
        <ul className='countryCard__list'>
          <li className='countryCard__list-item'><span>Population:</span> {country.population}</li>
          <li className='countryCard__list-item'><span>Region:</span> {country.region}</li>
          <li className='countryCard__list-item'><span>Capital</span> {country.capital}</li>
        </ul>
      </section>
    </article>
  )
}

export default CountryCard