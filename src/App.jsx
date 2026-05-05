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
    "startTime": 111,
    "title": "Donkey (Shrek)"
  },
  {
    "id": 2,
    "description": "low, gravelly, subdued affect",
    "youtubeId": "CQI0E1WCLMU",
    "startTime": 0,
    "title": "Eeyore (Winnie the Pooh)"
  },
  {
    "id": 3,
    "description": "contemptuous, gravelly",
    "youtubeId": "vyMggFe9WRQ",
    "startTime": 0,
    "title": "Jack Nicholson"
  },
  {
    "id": 4,
    "description": "upbeat affect, optimistic outlook",
    "youtubeId": "xNDcvy0e7GI",
    "startTime": 0,
    "title": "Joy"
  },
  {
    "id": 5,
    "description": "lower register, flat affect",
    "youtubeId": "DHUC38kB1NY",
    "startTime": 0,
    "title": "Daria"
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

  function handleUpdateDescription(id, newDescription) {
    setListings((prev) =>
      prev.map((listing) =>
        listing.id === id ? { ...listing, description: newDescription } : listing
      )
    );
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
            element={<ListingDetail listings={listings} onUpdateDescription={handleUpdateDescription} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
