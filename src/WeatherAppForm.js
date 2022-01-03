import { useState } from "react";
import Details from "./Details";

export default function WeatherAppForm() {
  const [city, setCity] = useState("Shiraz");

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.text.value);
  }

  return (
    <div className="container-fluid">
      <form className="mt-5" onSubmit={updateCity}>
        <div className="row mt-4 d-flex flex-sm justify-content-evenly">
          <div className="col-sm-6">
            <input
              type="text"
              name="text"
              className="search-bar w-100"
              placeholder="Type a city..."
            />
          </div>
          <div className="col-sm-2">
            <input
              type="submit"
              value="Search"
              className="search-button w-100"
            />
          </div>
          <div className="col-sm-2">
            <button className="current-location w-100">Current</button>
          </div>
        </div>
        <Details city={city} />
      </form>
    </div>
  );
}
