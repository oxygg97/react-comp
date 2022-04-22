import React from "react";
import FullName from "./Component/profile/FullName";
import ProfilePhoto from "./Component/profile/ProfilePhoto";
import "./App.css";
import Address from "./Component/profile/Address";
const App = () => {
  return (
    <div>
      <FullName />
      <br />
      <br />
      <br />

      <ProfilePhoto />

      <Address />
    </div>
  );
};

export default App;
