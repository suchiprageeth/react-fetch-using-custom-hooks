import { useState } from "react";
import "./App.css";
import TripList from "./components/TripList";
import useFetch from "./hooks/useFetch";

function App() {
  const [url, setUrl] = useState("http://localhost:3000/trips33");
  const { data: trips, isPending } = useFetch(url);

  return (
    <div className="trip-list">
      <TripList />
      {isPending && <div>Loading...</div>}
      <ul>
        {trips &&
          trips?.map((trip) => {
            return (
              <li key={trip.id}>
                <h3>Package: {trip.title}</h3>
                <p>Price: {trip.price}</p>
              </li>
            );
          })}
      </ul>

      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=Europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
}

export default App;
