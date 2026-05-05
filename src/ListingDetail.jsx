import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ListingDetail({ listings }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = listings.find((l) => l.id === Number(id));
  const embedUrl = listing
    ? `https://www.youtube.com/embed/${listing.youtubeId}?start=${listing.startTime ?? 0}`
    : null;

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
        <h2>{listing.description}</h2>
        <p className="detail-location">{listing.location}</p>
      </div>
    </main>
  );
}

export default ListingDetail;
