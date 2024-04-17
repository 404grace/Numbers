import { useEffect, useState } from "react";
import Random from "./Random";
import { Input } from "@/components/ui/input";

export default function App() {
  const [fact, setFact] = useState({});
  const [number, setNumber] = useState(0);
  const [countries, setCountries] = useState([]);
  // ustvari state "countries"
  // zacetna vrednost je seznam drzav iz pythona
  const [colors, setColors] = useState(["red", "pink", "blue"]);
  // ustvari state "colors"
  // zacetna vrednost je seznam petih barv - besed
  // uporabit colors z map-om (spodaj pri drzavah)

  async function getRandomFact() {
    const response = await fetch("http://numbersapi.com/random?json");
    const data = await response.json();
    setFact(data);
  }

  async function getNumberFact(number) {
    const response = await fetch("http://numbersapi.com/" + number + "?json");
    const data = await response.json();
    setFact(data);
  }

  async function getCountries() {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flag,borders,region",
    );
    const data = await response.json();
    setCountries(data);
  }

  // napisi funkcijo getCountries, ki uporabi spodnji url
  // podatke shrani v state "countries"
  // fetch this --> restcountries.com/v3.1/all?fields=name,flag,borders,region

  https: useEffect(() => {
    getRandomFact();
    getCountries();
  }, []);

  useEffect(() => {
    getNumberFact(number);
  }, [number]);

  return (
    <div className="container">
      <h1>Državi</h1>
      {countries
        // samo drzave ki imajo region na Europe
        .filter((country) => country.region == "Europe")
        .map((country) => (
          <p>{country.name.common}</p>
        ))}
      {/*
      dodaj map, ki se sprehodi čez vse drzave in
      vsako izpise kot <p></p>
      for country in countries:
        print(country)
      */}

      {colors.map((c) => (
        <p>{c}</p>
      ))}
      <Input
        placeholder="Vnesi število, ki te zanima ..."
        type="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>{number}</p>
      <Random fact={fact}></Random>
    </div>
  );
}
