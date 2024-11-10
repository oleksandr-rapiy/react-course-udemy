import { calculateInvestmentResults, formatter } from "../util/investment";

function Results({ investmentData }) {
  const result = calculateInvestmentResults(investmentData);
  const initalInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((data, i) => {
          const totalInterest =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initalInvestment;

          const totalAmountInvested = data.valueEndOfYear - totalInterest;
          return (
            <tr key={i}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
