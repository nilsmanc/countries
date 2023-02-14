import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { List } from '../components/List'
import { ALL_COUNTRIES } from '../config'
import { Controls } from '../components/Controls'
import { Card } from '../components/Card'
import styled from 'styled-components'

export const HomePage = ({ setCountries, countries }) => {
  const navigate = useNavigate()
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const [isShowAll, setIsShowAll] = useState(false)

  const handleSearch = (search?, region?) => {
    let data = [...countries]
    if (region) {
      data = data.filter((c) => c.region.includes(region))
    }

    if (search) {
      data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilteredCountries(data)
  }

  const Button = styled.div`
    width: 100%;
    color: var(--colors-text);
    background: none;
    border-top: 1px solid var(--colors-text);
    padding-top: 10px;
    cursor: pointer;
    text-align: center;
  `

  useEffect(() => {
    if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
  }, [])

  useEffect(() => {
    handleSearch()
  }, [countries])

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {(isShowAll ? filteredCountries : filteredCountries.slice(0, 8)).map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          }
          return (
            <Card key={c.name} onClick={() => navigate(`/country/${c.name}`)} {...countryInfo} />
          )
        })}
      </List>
      {!isShowAll && filteredCountries.length > 8 && (
        <Button onClick={() => setIsShowAll(true)}>Show All</Button>
      )}
    </>
  )
}
