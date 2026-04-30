import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const listingsInitial = [
  {
    "id": 1,
    "description": "tangential, upbeat affect",
    "image": "./src/assets/donkey.jpg",

  },
  {
    "id": 2,
    "description": "2019 Toyota Tacoma grill",
    "image": "./src/assets/toyota-grill.jpg",
    "location": "Williamsburg"
  },
  {
    "id": 3,
    "description": "Free Braun 3735 Electric Toothbrush charger",
    "image": "./src/assets/toothbrush-charger.jpg",
    "location": "Williamsburg"
  },
  {
    "id": 4,
    "description": "FREE Hundreds of DVD/CD Cases - Different Sizes and Colors",
    "image": "./src/assets/dvd-cases.jpg",
    "location": "Prospect Heights"
  },
  {
    "id": 5,
    "description": "wood",
    "image": "./src/assets/wood.jpg",
    "location": "Greenpoint"
  }
]

function App() {

  const [listings, setListings] = useState(listingsInitial);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:6001/listings")
  //     .then((r) => r.json())
  //     .then(setListings);
  // }, []);

  function handleRemoveListing(id) {
    const newListings = listings.filter((listing) => listing.id !== id);
    setListings(newListings);
  }

  const displayedListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer
        listings={displayedListings}
        onRemoveListing={handleRemoveListing}
      />
    </div>
  );
}


export default App;
