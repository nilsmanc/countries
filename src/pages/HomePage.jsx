import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { List } from '../components/List';
import { ALL_COUNTRIES } from '../config';
import { Controls } from '../components/Controls';
import { Card } from '../components/Card';
export const HomePage = ({ setCountries, countries }) => {
  const navigate = useNavigate();
  //const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);
  return (
    <>
      <Controls />
      <List>
        {countries.map((c) => {
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
          };
          return (
            <Card key={c.name} onClick={() => navigate(`/country/${c.name}`)} {...countryInfo} />
          );
        })}
      </List>
    </>
  );
};
