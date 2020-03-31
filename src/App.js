import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Sherri Porter"
        avatar="https://randomuser.me/api/portraits/women/65.jpg"
      />
      <Contact
        name="Patsy Herrera"
        avatar="https://randomuser.me/api/portraits/women/26.jpg"
        online
      />
      <Contact
        name="Colleen Lee"
        avatar="https://randomuser.me/api/portraits/women/19.jpg"
        online
      />
      <Contact
        name="Andre Hayes"
        avatar="https://randomuser.me/api/portraits/men/69.jpg"
      />
    </div>
  );
}

export default App;
