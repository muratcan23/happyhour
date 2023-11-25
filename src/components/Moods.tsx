// Moods.tsx
import React, { useState } from "react";
import Info from "./Info";

const Moods: React.FC = () => {
  const [moodLevel, setMoodLevel] = useState<number>(3);

  const increaseMood = () => {
    if (moodLevel < 5) {
      setMoodLevel((prevMood) => prevMood + 1);
    }
  };

  const decreaseMood = () => {
    if (moodLevel > 1) {
      setMoodLevel((prevMood) => prevMood - 1);
    }
  };

  const getEmoji = (): string => {
    switch (moodLevel) {
      case 1:
        return "😞";
      case 2:
        return "😕";
      case 3:
        return "😐";
      case 4:
        return "🙂";
      case 5:
        return "😊";
      default:
        return "😐";
    }
  };

  const getDurationDescription = (): string => {
    switch (moodLevel) {
      case 1:
        return "5 hours";
      case 2:
        return "2 hours";
      case 3:
        return "1 hour";
      case 4:
        return "1 hour and 30 minutes";
      case 5:
        return "15 minutes";
      default:
        return "Not defined";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#17645F] text-white">
      <div className="flex w-full max-w-6xl py-8 px-4">
        <div className="flex items-center justify-between w-full">
          <button
            className="flex items-center font-bold text-yellow-50 mr-4"
            onClick={decreaseMood}
          >
            <img
              className="h-10 w-10"
              src="https://www.citypng.com/public/uploads/preview/down-arrow-downward-download-red-button-icon-png-11664427793dlk6ryh2uy.png?v=2023062412"
              alt=""
            />
            Unhappier
          </button>
          <div className="text-4xl">{getEmoji()}</div>
          <button
            className="flex items-center font-bold text-yellow-50 ml-4"
            onClick={increaseMood}
          >
            Happier
            <img
              className="h-10 w-10"
              src="https://e7.pngegg.com/pngimages/412/673/png-clipart-green-arrow-up-arrow-s-angle-triangle.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <Info moodLevel={moodLevel} />
      <div className="absolute bottom-0 w-full bg-[#17645F] text-center py-8">
        <p className="text-lg font-bold italic mb-4 text-white">
          You felt past 1-hour duration as{" "}
          <span className="font-bold text-yellow-600">
            {getDurationDescription()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Moods;
