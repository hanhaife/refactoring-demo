import assert from 'assert'
import invoices from '../inputs/invoices.json';
import plays from '../inputs/plays.json';
import { statement } from '../src/statement-refactored.js';
// import { htmlStatement } from '../src/statement-refactored.js';

// import createStatementData from '../src/createStatementData.js';

describe('Statement', function () {
  it('输入invoices参数，应该得到以下文本输出：', function () {
    assert.equal(statement(invoices[0], plays), `Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`);
  });
});

// describe('HtmlStatement', function () {
//   it('输入invoices参数，应该得到以下HTML输出：', function () {
//     assert.equal(htmlStatement(invoices[0], plays), `<h1>Statement for BigCo</h1>
// <table>
// <tr><th>play</th><th>seats</th><th>cost</th></tr> <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>
//  <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>
//  <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>
// </table>
// <p>Amount owed is <em>$1,730.00</em></p>
// <p>You earned <em>47</em> credits</p>
// `);
//   });
// });

// describe('createStatementData', function () {
//   it('输入invoices参数，应该得到以下结果：', function () {
//     const expectResult  = {
//       customer: 'BigCo',
//       performances: [
//         {
//           amount: 65000,
//           audience: 55,
//           play: {
//             name: 'Hamlet',
//             type: 'tragedy'
//           },
//           playID: 'hamlet',
//           volumeCredits: 25
//         },
//         {
//           amount: 58000,
//           audience: 35,
//           play: {
//             name: 'As You Like It',
//             type: 'comedy'
//           },
//           playID: 'as-like',
//           volumeCredits: 12
//         },
//         {
//           amount: 50000,
//           audience: 40,
//           play: {
//             name: 'Othello',
//             type: 'tragedy'
//           },
//           playID: 'othello',
//           volumeCredits: 10
//         }
//       ],
//       totalAmount: 173000,
//       totalVolumeCredits: 47
//     }
//     assert.deepStrictEqual(createStatementData(invoices[0], plays), expectResult);
//   });
// });