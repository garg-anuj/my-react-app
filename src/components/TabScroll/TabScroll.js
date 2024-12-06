import React, { useRef } from "react";

const Overview = () => (
  <div style={{ height: "600px", border: "2px solid yellow" }}>
    Overview Content
  </div>
);
const Amenities = () => (
  <div style={{ height: "800px", border: "2px solid red" }}>
    Amenities Content
  </div>
);
const FloorPlans = () => (
  <div style={{ height: "500px", border: "2px solid green" }}>
    Floor Plans Content
  </div>
);

// const TabScroll = () => {
//   const overviewRef = useRef(null);
//   const amenitiesRef = useRef(null);
//   const floorPlansRef = useRef(null);

//   const handleScrollToSection = (sectionRef) => {
//     sectionRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       {/* Tabs */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           backgroundColor: "#fff",
//           zIndex: 1000,
//         }}
//       >
//         <button onClick={() => handleScrollToSection(overviewRef)}>
//           Overview
//         </button>
//         <button onClick={() => handleScrollToSection(amenitiesRef)}>
//           Amenities
//         </button>
//         <button onClick={() => handleScrollToSection(floorPlansRef)}>
//           Floor Plans
//         </button>
//         {/* Add more buttons for other sections */}
//       </div>

//       {/* Sections */}
//       <div style={{ paddingTop: "50px" }} ref={overviewRef}>
//         <Overview />
//       </div>
//       <div ref={amenitiesRef}>
//         <Amenities />
//       </div>
//       <div ref={floorPlansRef}>
//         <FloorPlans />
//       </div>
//       {/* Add more sections here */}
//     </div>
//   );
// };

// -----2nd method--------------------------------------------------

// const TabScroll = () => {
//   // Object to store refs dynamically
//   const sectionsRef = useRef({
//     overview: null,
//     amenities: null,
//     floorPlans: null,
//   });

//   // Function to scroll to the respective section
//   const handleScrollToSection = (sectionName) => {
//     sectionsRef.current[sectionName].scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       {/* Tabs */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           backgroundColor: "#fff",
//           zIndex: 1000,
//         }}
//       >
//         <button onClick={() => handleScrollToSection("overview")}>
//           Overview
//         </button>
//         <button onClick={() => handleScrollToSection("amenities")}>
//           Amenities
//         </button>
//         <button onClick={() => handleScrollToSection("floorPlans")}>
//           Floor Plans
//         </button>
//         {/* Add more buttons for other sections */}
//       </div>

//       {/* Sections */}
//       <div
//         style={{ paddingTop: "50px" }}
//         ref={(el) => {
//           console.log(el);

//           sectionsRef.current.overview = el;
//         }}
//       >
//         <Overview />
//       </div>
//       <div
//         ref={(el) => {
//           console.log(el);

//           sectionsRef.current.amenities = el;
//         }}
//       >
//         <Amenities />
//       </div>
//       <div
//         ref={(el) => {
//           console.log(el);
//           sectionsRef.current.floorPlans = el;
//         }}
//       >
//         <FloorPlans />
//       </div>
//       {/* Add more sections here */}
//     </div>
//   );
// };

const TabScroll = () => {
  // Object to store refs dynamically
  const sectionsRef = useRef({
    overview: null,
    amenities: null,
    floorPlans: null,
  });

  // Function to scroll to the respective section
  const handleScrollToSection = (sectionName) => {
    sectionsRef.current[sectionName].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Tabs */}
      <div
        style={{
          position: "fixed",
          top: 0,
          backgroundColor: "#fff",
          zIndex: 1000,
        }}
      >
        <button onClick={() => handleScrollToSection("overview")}>
          Overview
        </button>
        <button onClick={() => handleScrollToSection("amenities")}>
          Amenities
        </button>
        <button onClick={() => handleScrollToSection("floorPlans")}>
          Floor Plans
        </button>
        {/* Add more buttons for other sections */}
      </div>

      {/* Sections */}
      <div
        style={{ paddingTop: "50px" }}
        ref={(el) => {
          console.log(el);

          sectionsRef.current.overview = el;
        }}
      >
        <Overview />
      </div>
      <div
        ref={(el) => {
          console.log(el);

          sectionsRef.current.amenities = el;
        }}
      >
        <Amenities />
      </div>
      <div
        ref={(el) => {
          console.log(el);
          sectionsRef.current.floorPlans = el;
        }}
      >
        <FloorPlans />
      </div>
      {/* Add more sections here */}
    </div>
  );
};

export default TabScroll;
