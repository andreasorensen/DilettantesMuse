import React from "react";
import { ArtData } from "../../utils";
import ArtCard from "../ArtCard/ArtCard";
import './Homepage.css'

interface Props {//hat needs to be put into state is not just directly from form... it should be the actual response from the post TESTPST meaning interception
  pieces: ArtData[];
  setSavedPieces: (piece: ArtData) => void;
  setPieces: React.Dispatch<React.SetStateAction<ArtData[]>>
}

const Homepage = ({ pieces, setSavedPieces, setPieces }: Props) => {
  const renderPieces = () => {
    const allPieces = pieces.map((piece) => (
      <ArtCard
        key={piece.objectID}
        piece={piece}
        setSavedPieces={setSavedPieces}
      />
    ));
    return allPieces.slice(0, 3);
  };

  return (
    <div className="homepage">
      <h1 className="home-header">Discover Paintings from the Metropolitan Museum of Art</h1>
      <div className="art-cards-container">
        {renderPieces()}
        {pieces.length < 3 && <p className="loading-text">Loading...</p>}
      </div>
      <button onClick={() => {setPieces([])}} className="more-btn">Get More Art</button>
    </div>
  );
};

export default Homepage;
