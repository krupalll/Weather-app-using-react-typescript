import { useState, useEffect, ChangeEvent } from 'react';
import { optionType, forecastType } from './../types/index';

const BASE_URL = 'http://api.openweathermap.org';
const apiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=K&limit=5&lang=en&appid=b569a460a0832ac66aa8bfc25d2f4d6a';

const useForecast = () => {
  const [city, setCity] = useState<optionType | null>(null);
  const [term, setTerm] = useState<string>('');
  const [options, setOptions] = useState<optionType[]>([]);
  const [forecast, setForecast] = useState<forecastType | null>(null);

  const getSearchOptions = async (term: string) => {
    fetch(
      // `${BASE_URL}/geo/1.0/direct?q=${term.trim()}&limit=5&lang=en&appid=b569a460a0832ac66aa8bfc25d2f4d6a`
      `${apiUrl}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setOptions(data as optionType[]);
        } else {
          console.log('Data is not an array:', data);
          setOptions([]);
        }
      })
      .catch((e) => console.log({ e }));
  };

  const onSubmit = () => {
    if (!city) return;
    getForecast(city);
  };

  const getForecast = (data: optionType) => {
    fetch(
      `${BASE_URL}/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&units=metric&lang=en&appid=b569a460a0832ac66aa8bfc25d2f4d6a`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData: forecastType = {
          ...data.city,
          list: data.list.slice(0, 16),
        };
        setForecast(forecastData);
      })
      .catch((e) => console.log({ e }));
  };

  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(e.target.value);

    if (value !== '') {
      getSearchOptions(value);
    }
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  useEffect(() => {
    console.log('Options:', options); // Debugging line
  }, [options]);

  return {
    forecast,
    options,
    term,
    onOptionSelect,
    onSubmit,
    onInputChange,
  };
};

export default useForecast;
