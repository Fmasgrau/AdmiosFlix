import React, { useState } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

export default function Home(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = (event: any) => {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Layout navbar={<Navbar onClick={handleClick} menuOpen={isMenuOpen} />} />
    </>
  );
}
