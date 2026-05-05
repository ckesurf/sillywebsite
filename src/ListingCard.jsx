import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ListingCard({
  listing: { id, youtubeId, description, title },
  onRemoveListing,
}) {
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    onRemoveListing(id);
  }

  return (
    <li className="card" onClick={() => navigate(`/listings/${id}`)} style={{ cursor: "pointer" }}>
      <div className="image">
        <img
          src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
          alt={description}
        />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={(e) => { e.stopPropagation(); setFavorite(false); }}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={(e) => { e.stopPropagation(); setFavorite(true); }}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {title}</span>
      </div>
    </li>
  );
}

export default ListingCard;
