import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Math Worksheets</title>
        <meta name="description" content="Math worksheets for daily practice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Subtraction</h3>
        <div className="grid">
          <div className="col2">
            <a className="mainlink" href="/subtraction-from-11">
              Subtraction from 11
            </a>
          </div>
          <div className="col2">
            <a className="mainlink" href="/subtraction-from-12">
              Subtraction from 12
            </a>
          </div>
          <div className="col2">
            <a className="mainlink" href="#">
              Subtraction from 14
            </a>
          </div>
          <div className="col2">
            <a className="mainlink" href="#">
              Subtraction from 16
            </a>
          </div>
          <div className="col2">
            <a className="mainlink" href="#">
              Subtraction from 20
            </a>
          </div>
        </div>
      </main>

      <footer className="footer">Made with ❤ for all kids</footer>
    </div>
  );
}
