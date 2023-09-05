import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "../components/App";
import AppContext from "../components/Context";

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    // console.log("react works");
    const app = document.getElementById("app");
    createRoot(app).render(
      <AppContext>
        <App />
      </AppContext>
    );
  }
}
