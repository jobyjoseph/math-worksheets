import Head from "next/head";
import HorizontalOperation from "../components/horizontal-operation";
import { generateRandomNumber } from "../utils/generateRandomNumber";

export default function SubtractionFrom12({ questions }) {
  return (
    <div>
      <Head>
        <title>Subtraction From 12 - Math Worksheets</title>
        <meta
          name="description"
          content="Subtraction worksheets - subtract from 12"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Subtraction from 12 :</h3>
        <div className="grid">
          {questions.map(({ num1, num2, operator }, index) => {
            return (
              <div className="col2" key={index}>
                <HorizontalOperation
                  slNo={index + 1}
                  num1={num1}
                  num2={num2}
                  operator={operator}
                />
              </div>
            );
          })}
        </div>
      </main>

      <footer className="footer">Made with ❤ for all kids</footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const questions = [];
  for (let i = 1; i <= 100; i++) {
    const questionObj = {
      num1: 12,
      num2: generateRandomNumber(0, 12),
      operator: "-",
    };
    questions.push(questionObj);
  }
  return {
    props: { questions },
  };
}
