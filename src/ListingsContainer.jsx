import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onRemoveListing }) {
  return (
    <main>
      <p className="site-description">
        Fictional characters, clinically observed. For science.
      </p>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onRemoveListing={onRemoveListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
