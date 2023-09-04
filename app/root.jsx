import AppContainer from "./components/layout/AppContainer";
import styles from "./tailwind.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <link
          rel="icon"
          href="https://play-lh.googleusercontent.com/LGauD_UiiO9Tx83bQTXsy-udUdyJ6KubPqt-qsbbNl20k10lBfQr6ovianQ8PT63_ng=s96-rw"
          sizes="any"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body>
        <AppContainer>
          <Outlet />
        </AppContainer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];
