import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <h1>
        <a href="/">Math Worksheets</a>
      </h1>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
