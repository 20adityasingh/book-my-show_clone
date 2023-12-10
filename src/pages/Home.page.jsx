import React, { useState } from "react";
import Defaultlayout from "../layouts/Default.layout";
import HeroCarousels from "../components/HeroCarousels/HeroCarousels.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";

const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies]= useState([])
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
    return (
      <>
        <HeroCarousels/>
        <div className="container mx-auto px-4 md:px-12 my-8 ">
          <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
            The Best of Entertainment
          </h1>
            <EntertainmentCardSlider />
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSlider
            title="Recommended Movies"
            subject="List of recommended Movies"
            poster={recommendedMovies}
            isDark={false}
          />
        </div>
        <div className="bg-premier-800">
          <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img src="" alt="Rupay" className="w-full h-full" />
            </div>
            <PosterSlider
              title="Premiers"
              subject="Brand New releases every Friday"
              poster={premierMovies}
              isDark={true}
            />
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSlider
            title="Online Streaming Event"
            subject="Stream your Show"
            poster={onlineStreamEvents}
            isDark={false}
          />
        </div>
      </>
    );
};

export default Defaultlayout(HomePage);