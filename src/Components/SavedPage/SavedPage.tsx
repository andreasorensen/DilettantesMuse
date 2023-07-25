import React from "react";
import { ArtData } from "../../utils";
import ArtCard from "../ArtCard/ArtCard";
import './SavedPage.css'

interface Props {
  savePieces: ArtData[];
  setSavedPieces: (piece: ArtData) => void;
}
const SavedPage: React.FC<Props> = ({ savePieces, setSavedPieces }) => {
  const renderSavedPieces = () => {
    return savePieces.map((piece) => {
      return (
        <ArtCard
          key={piece.objectID}
          piece={piece}
          setSavedPieces={setSavedPieces}
        />
      );
    });
  };

  return (
    <div className="saved-container">
      {!savePieces.length ? (
        <h1>There are no saved pieces</h1>
      ) : (
        renderSavedPieces()
      )}
    </div>
  );
};

export default SavedPage;
