// Import * as React from "react";
// import { render } from "react-dom";
// import { motion, useTime, useTransform } from "framer-motion";
// import {useState} from "react";
// import "./styles.css";
// import { useEffect } from "react";

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const time = useTime();
//   const rotate = useTransform(
//                 time, [0, 500], [0, 180], { clamp: true }
//                 );
//   useEffect((e) => {
//     setIsOpen(!isOpen)
//   })
//   return (
//     <div className="example-container">
//       <motion.div
//       style={{ rotate }}
//       layout
//       data-isOpen={isOpen}
//       initial={{ borderRadius: 50 }}
//       className="parent"

//       />
//     </div>
//   );
// };

// render(<App />, document.getElementById("root"));
