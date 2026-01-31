import { createFileRoute } from "@tanstack/react-router";
import "./index.css";
import { useState } from "react";

export const Route = createFileRoute("/_guest/basereact")({
  component: RouteComponent,
});

function RouteComponent() {
  const [counter, setCounter] = useState(0);

  const createRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  return (
    <div className="app">
      <div className="hero">
        <img src="/logo.png" alt="hehehe" />
      </div>
      <h1>
        Arigatou, for using <a href="https://senkujs.com">Senku Js!</a>
      </h1>
      <div className="box">
        <span className="counter">{counter}</span>
        <div className="actions">
          <button
            onClick={(e) => {
              createRipple(e);
              setCounter(counter + 1);
            }}
            className="action-buttons"
          >
            Plus
          </button>
          <button
            onClick={(e) => {
              createRipple(e);
              setCounter(counter - 1);
            }}
            className="action-buttons"
          >
            Minus
          </button>
        </div>
      </div>
      <span className="hint">Edit src/App.jsx to get started</span>
    </div>
  );
}
