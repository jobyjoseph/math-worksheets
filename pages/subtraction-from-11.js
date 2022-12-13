import Head from "next/head";
import { useState } from "react";
import HorizontalOperation from "../components/horizontal-operation";
import { generateRandomNumber } from "../utils/generateRandomNumber";

export default function SubtractionFrom11({ questions }) {
  const [verify, setVerify] = useState(false);
  const handleSubmit = () => {
    setVerify(true);
  };

  return (
    <div>
      <Head>
        <title>Subtraction From 11 - Math Worksheets</title>
        <meta
          name="description"
          content="Subtraction worksheets - subtract from numbers upto 11"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Subtraction from 11 :</h3>
        <div className="grid">
          {questions.map(({ num1, num2, operator, answer }, index) => {
            return (
              <div className="col2" key={index}>
                <HorizontalOperation
                  slNo={index + 1}
                  num1={num1}
                  num2={num2}
                  operator={operator}
                  answer={answer}
                  verify={verify}
                />
              </div>
            );
          })}
        </div>
        <div className="action-controls">
          <button onClick={handleSubmit} className="primary">
            Submit
          </button>
        </div>
      </main>

      <footer className="footer">Made with ❤ for all kids</footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const questions = [];
  for (let i = 1; i <= 100; i++) {
    const num1 = 11;
    const num2 = generateRandomNumber(0, 11);
    const questionObj = {
      num1,
      num2,
      operator: "-",
      answer: num1 - num2,
    };
    questions.push(questionObj);
  }
  return {
    props: { questions },
  };
}
