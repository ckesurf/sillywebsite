import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const listingsInitial = [
  {
    "id": 1,
    "description": "tangential, upbeat affect",
    "image": "https://upload.wikimedia.org/wikipedia/en/6/6c/Donkey_%28Shrek%29.png",
    "location": "Donkey (Shrek)"

  },
  {
    "id": 2,
    "description": "low, gravelly, subdued affect",
    "image": "https://lumiere-a.akamaihd.net/v1/images/b_winniethepooh_characterbanner_eeyore_mobile_9fed31a7.jpeg",
    "location": "Eeyore (Winnie the Pooh)"
  },
  {
    "id": 3,
    "description": "contemptuous, gravelly, incoherent manic affect",
    "image": "https://cdn.aarp.net/content/dam/aarpe/en/home/entertainment/movies-for-grownups/best-jack-nicholson-movies/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.932.jpeg/content/dam/aarp/entertainment/movies-for-grownups/2022/04/1140-jack-nicholson-batman-the-shining-chinatown.jpg",
    "location": "Jack Nicholson"
  },
  {
    "id": 4,
    "description": "upbeat affect",
    "image": "https://upload.wikimedia.org/wikipedia/en/3/30/Joy_-_Inside_Out.webp",
    "location": "Joy"
  },
  {
    "id": 5,
    "description": "raspy, lower register, flat affect",
    "image": "https://i.ytimg.com/vi/M9zfTxoubvw/maxresdefault.jpg",
    "location": "Mira"
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
