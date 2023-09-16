import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-ysog3jtsnesfn1cz.us.auth0.com"
     clientId="gZ0RJxXZNXoK2xF4xHX2wyfvKPwDCmtF"
     authorizationParams={{
      redirect_uri: "https://full-stack-real-estate-youtube-sooty.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
