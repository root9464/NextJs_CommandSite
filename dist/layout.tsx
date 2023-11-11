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

// function useOnScreen(ref: any, rootMargin = '0px') {
//     const [isIntersecting, setIntersecting] = useState<boolean>(false);
//     useEffect(() => {
//         let currentRef: any = null;
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setIntersecting(entry.isIntersecting);
//             },
//             {
//                 rootMargin,
//             },
//         );
//         if (ref.current) {
//             currentRef = ref.current;
//             observer.observe(currentRef);
//         }

//         return () => {
//             observer.unobserve(currentRef);
//         };
//     }, [ref, rootMargin]);
//     return isIntersecting;
// }

// const controls = useAnimation();
// const rootRef = useRef<any>();
// const onScreen = useOnScreen(rootRef);
// useEffect(() => {
//     if (onScreen) {
//         controls.start({
//             x: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.5,
//                 ease: 'easeOut',
//             },
//         });
//     }
// }, [onScreen, controls]);

// const containerRef = useRef(null);

// 	const {scrollYProgress} = useScroll({
// 		target: containerRef,
// 		offset: ['start end', 'end end'],
// 	});

// 	const bottomShadowValue = useTransform(
// 		scrollYProgress,
// 		[0, 1],
// 		['-100%', '0%'],
// 	);
// 	const imageValue = useTransform(scrollYProgress, [0, 1], ['-80%', '0%']);
// 	const topShadowValue = useTransform(
// 		scrollYProgress,
// 		[0, 1],
// 		['-25%', '100%'],
// 	);

