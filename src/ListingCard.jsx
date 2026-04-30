import React, { useState } from "react";

function ListingCard({
  listing: { id, image, description, location },
  onRemoveListing,
}) {
  const [favorite, setFavorite] = useState(false);

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    onRemoveListing(id);
  }

  return (
    <li className="card">
      <div className="image">
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={() => setFavorite(false)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={() => setFavorite(true)}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
      </div>
    </li>
  );
}

export default ListingCard;
