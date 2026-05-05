import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ListingDetail({ listings, onUpdateDescription }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = listings.find((l) => l.id === Number(id));
  const embedUrl = listing
    ? `https://www.youtube.com/embed/${listing.youtubeId}?start=${listing.startTime ?? 0}`
    : null;
  const [isEditing, setIsEditing] = useState(false);
  const [draftDescription, setDraftDescription] = useState("");

  if (!listing) {
    return (
      <main className="listing-detail">
        <p>Listing not found.</p>
        <button className="back-button" onClick={() => navigate("/")}>← Back</button>
      </main>
    );
  }

  return (
    <main className="listing-detail">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-video">
        <iframe
          src={embedUrl}
          title={listing.description}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="detail-info">
        <h2>{listing.title}</h2>
        {isEditing ? (
          <div className="description-edit">
            <input
              value={draftDescription}
              onChange={(e) => setDraftDescription(e.target.value)}
              className="description-input"
            />
            <button onClick={() => {
              onUpdateDescription(listing.id, draftDescription);
              setIsEditing(false);
            }}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        ) : (
          <div className="description-edit">
            <p className="detail-description">{listing.description}</p>
            <button onClick={() => {
              setDraftDescription(listing.description);
              setIsEditing(true);
            }}>Edit</button>
          </div>
        )}
      </div>
    </main>
  );
}

export default ListingDetail;
