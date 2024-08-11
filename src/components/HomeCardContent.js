import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeCardContent() {
  const cardContent = [
    {
      contntIm: "", // Placeholder for image URLs if needed
      cont: "When asked why he thinks it is important for stories on healthcare and public infrastructure to be reported from areas hit by unrest, Basharat says, “It is about the ethics of reporting, we must present a balanced picture. A positive story like this is important for me because it depicts other aspects of life in Shopian as well, it shows the other issues that common people have to face apart from conflict. And when someone is doing something good, they also need to be appreciated.”",
    },
    {
        contntIm: "", // Placeholder for image URLs if needed
        cont: "When asked why he thinks it is important for stories on healthcare and public infrastructure to be reported from areas hit by unrest, Basharat says, “It is about the ethics of reporting, we must present a balanced picture. A positive story like this is important for me because it depicts other aspects of life in Shopian as well, it shows the other issues that common people have to face apart from conflict. And when someone is doing something good, they also need to be appreciated.”",
      },
      {
        contntIm: "", // Placeholder for image URLs if needed
        cont: "When asked why he thinks it is important for stories on healthcare and public infrastructure to be reported from areas hit by unrest, Basharat says, “It is about the ethics of reporting, we must present a balanced picture. A positive story like this is important for me because it depicts other aspects of life in Shopian as well, it shows the other issues that common people have to face apart from conflict. And when someone is doing something good, they also need to be appreciated.”",
      },
      {
        contntIm: "", // Placeholder for image URLs if needed
        cont: "When asked why he thinks it is important for stories on healthcare and public infrastructure to be reported from areas hit by unrest, Basharat says, “It is about the ethics of reporting, we must present a balanced picture. A positive story like this is important for me because it depicts other aspects of life in Shopian as well, it shows the other issues that common people have to face apart from conflict. And when someone is doing something good, they also need to be appreciated.”",
      },
      {
        contntIm: "", // Placeholder for image URLs if needed
        cont: "When asked why he thinks it is important for stories on healthcare and public infrastructure to be reported from areas hit by unrest, Basharat says, “It is about the ethics of reporting, we must present a balanced picture. A positive story like this is important for me because it depicts other aspects of life in Shopian as well, it shows the other issues that common people have to face apart from conflict. And when someone is doing something good, they also need to be appreciated.”",
      },
      {
        contntIm: "", // Placeholder for image URLs if needed
        cont: "When asked why he thinks it is important for stories on healthcare and public infrastructure to be reported from areas hit by unrest, Basharat says, “It is about the ethics of reporting, we must present a balanced picture. A positive story like this is important for me because it depicts other aspects of life in Shopian as well, it shows the other issues that common people have to face apart from conflict. And when someone is doing something good, they also need to be appreciated.”",
      },    
    // Add more objects here
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {cardContent.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              {item.contntIm ? (
                <img 
                  src={item.contntIm} 
                  className="card-img-top rounded-circle mx-auto d-block mt-3" 
                  alt="" // Empty alt attribute to indicate decorative image
                  style={{ width: '150px', height: '150px' }} 
                />
              ) : (
                <div 
                  className="card-img-top rounded-circle mx-auto d-block mt-3" 
                  style={{ width: '150px', height: '150px', backgroundColor: '#f0f0f0' }} 
                />
              )}
              <div className="card-body">
                <p className="card-text">{item.cont}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCardContent;
