import React, { useState, useEffect } from "react";
import "./Section3.css";
import { useCountUp } from "react-countup";
import Counter1 from "./Counter1";

const Section3 = () => {
  const { countUp } = useCountUp({ start: 0, end: 2300 });
  const [state, setState] = useState({ isHide: false });
  // const [y, setY] = useState(0);

  //   const hideBar = () => {
  //     window.scrollY > 250
  //       ? !state.isHide && setState({ isHide: true })
  //       : state.isHide && setState({ isHide: false });
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", hideBar);

  //     // returned function will be called on component unmount
  //     return () => {
  //       window.removeEventListener("scroll", hideBar);
  //     };
  //   }, []);

  //   if (!state.isHide) return null;
  return (
    <div className={`section3`}>
      <Counter1 />
      <div className="counter2">{countUp}</div>
      <Counter1 />
      <div className="counter2">{countUp}</div>
    </div>
  );
};

export default Section3;

// import React, { useState, useEffect } from "react";
// import "./Section3.css";
// import { useCountUp } from "react-countup";
// import Counter1 from "./Counter1";

// const Section3 = () => {
//   const { countUp } = useCountUp({ start: 0, end: 2300 });
//   const [state, setState] = useState({ isHide: false });
//   // const [y, setY] = useState(0);

//   const hideBar = () => {
//     window.scrollY > 250
//       ? !state.isHide && setState({ isHide: true })
//       : state.isHide && setState({ isHide: false });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", hideBar);

//     // returned function will be called on component unmount
//     return () => {
//       window.removeEventListener("scroll", hideBar);
//     };
//   }, []);

//   if (!state.isHide) return null;
//   return (
//     <div className={`section3`}>
//       <Counter1 />
//       <div className="counter2">{countUp}</div>
//       <Counter1 />
//       <div className="counter2">{countUp}</div>
//     </div>
//   );
// };

// export default Section3;
