import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingDetail from "./ListingDetail";

const listingsInitial = [
  {
    "id": 1,
    "description": "tangential, upbeat affect",
    "youtubeId": "oC3fCs-yD58",
    "startTime": 121,
    "location": "Donkey (Shrek)"
  },
  {
    "id": 2,
    "description": "low, gravelly, subdued affect",
    "youtubeId": "CQI0E1WCLMU",
    "startTime": 0,
    "location": "Eeyore (Winnie the Pooh)"
  },
  {
    "id": 3,
    "description": "contemptuous, gravelly",
    "youtubeId": "vyMggFe9WRQ",
    "startTime": 0,
    "location": "Jack Nicholson"
  },
  {
    "id": 4,
    "description": "upbeat affect, optimistic outlook",
    "youtubeId": "xNDcvy0e7GI",
    "startTime": 0,
    "location": "Joy"
  },
  {
    "id": 5,
    "description": "lower register, flat affect",
    "youtubeId": "DHUC38kB1NY",
    "startTime": 0,
    "location": "Daria"
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
    <BrowserRouter>
      <div className="app">
        <Header onSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <ListingsContainer
                listings={displayedListings}
                onRemoveListing={handleRemoveListing}
              />
            }
          />
          <Route
            path="/listings/:id"
            element={<ListingDetail listings={listings} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
