import React from "react";
import "./index.scss";

interface ILayoutProps {
  navbar: JSX.Element;
}

export default function Layout({ navbar }: ILayoutProps): JSX.Element {
  return (
    <>
      <div className="grid">
        <header>I'm the header</header>
        <nav>{navbar}</nav>
        <main>I'm the main</main>
        <footer>I'm the footer</footer>
      </div>
    </>
  );
}
