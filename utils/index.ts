import { CarProps } from "../types/index";
//Pienso cambiar esta funcion por una que calcule un financiamiento de carro
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const fetchCars = async () => {
  const headers = {
    "x-rapidapi-key": `${process.env.API_KEY}`,
    "x-rapidapi-host": `${process.env.API_KEY_HOST}`,
  };

  const response = await fetch(`${process.env.URL}?model=corolla`, { headers });

  const result = await response.json();

  return result;
};
