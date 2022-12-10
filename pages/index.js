import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Math Worksheets</title>
        <meta name="description" content="Math worksheets for daily practice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Subtraction</h3>
        <div className="grid">
          <div className="grid-link">
            <a href="#">Subtraction from numbers upto 11</a>
          </div>
          <div className="grid-link">
            <a href="#">Subtraction from numbers upto 12</a>
          </div>
          <div className="grid-link">
            <a href="#">Subtraction from numbers upto 14</a>
          </div>
          <div className="grid-link">
            <a href="#">Subtraction from numbers upto 16</a>
          </div>
          <div className="grid-link">
            <a href="#">Subtraction from numbers upto 20</a>
          </div>
        </div>
      </main>

      <footer className="footer">Made with ❤ for all kids</footer>
    </div>
  );
}
