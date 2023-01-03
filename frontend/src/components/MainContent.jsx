import { useState, useEffect } from 'react';
import CashforceHands from './CashforceHands';

const MainContent = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/api/");
        const data = await response.json();
        setOrders(() => data);
      }
      catch(err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="container">
      <header></header>
      <main className="main-content">
        <div className="notas-fiscais-container">
          <CashforceHands stroke="#021B51" />
          <h3>Notas fiscais</h3>
          <p>Visualize as notas fiscais que você tem.</p>
        </div>

        <table>
          <thead>
            <tr>
              <th>NOTA FISCAL</th>
              <th>SACADO</th>
              <th>CEDENTE</th>
              <th>EMISSÃO</th>
              <th>VALOR</th>
              <th>STATUS</th>
            </tr> 
          </thead>
          {
            orders.map((order, key) => {
              const { orderNumber, emissionDate, value, buyer, provider } = order;
              const [year, month, day] = emissionDate.replace(/T.+/, "").split("-");
              const money = new Intl
                .NumberFormat(undefined, { style: "currency", currency: "BRL" })
                .format(value);

              return (
                <tbody>
                  <tr key={ key }>
                    <td>{ orderNumber }</td>
                    <td>{ buyer.name }</td>
                    <td>{ provider.name }</td>
                    <td>{ `${day}/${month}/${year}` }</td>
                    <td>{ money }</td>
                    <td>RECEBIDO</td>
                    <td><button>Dados do cedente</button></td>
                  </tr>
                </tbody>
              )
            })
          }
        </table>
      </main>
    </div>
  )
};

export default MainContent;