import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Footer from "./Footer";
import NavBar from "./NavBar";

import styles from "./styles/app.css";

export const meta = () => ({
  charset: "utf-8",
  title: "Remix App | Ayush",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="max-w-screen-xl mx-auto p-8">{children}</div>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </Layout>
    </Document>
  );
}
