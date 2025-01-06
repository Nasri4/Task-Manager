import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero/>
      <div className="min-h-screen">
      <main className="pb-24"> {/* Add bottom padding to avoid content being hidden by the footer */}
        {/* Your main content goes here */}
      </main>
      <Footer />
    </div>
    </>
  );
};

export default App;
