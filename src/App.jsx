import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Routers from './Components/Routers/Routers';
// import RouterSignup from "./Components/Routers/RouterSignup";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Routers />
      {/* <RouterSignup/> */}
    </div>
  );
};

export default App;


// import React from 'react'
// import Routers from './Components/Routers/Routers'

// const App = () => {
//   return (
//     <div>
//       <Routers/>
//     </div>
//   )
// }

// export default App
