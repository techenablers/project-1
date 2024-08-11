import React from "react";
import CarouselComponent from "../../carousel/CarouselComponent";
import HomeCardContent from "../../HomeCardContent";

function Home() {
  return (
    <main className="flex-fill p-3">
     <CarouselComponent />
     <HomeCardContent/> 
     <p></p>
    </main>
  );
}

export default Home;
