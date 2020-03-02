import React, { useState, useEffect } from "react";

const LandingDataContext = React.createContext([{}, () => {}]);

const LandingDataProvider = props => {
  // Global State
  const [state, setState] = useState({
    stateTeste: "Hello",
    Landings: []
  });

  return (
    <LandingDataContext.Provider value={[state, setState]}>
      {props.children}
    </LandingDataContext.Provider>
  );
};

export { LandingDataContext, LandingDataProvider };
