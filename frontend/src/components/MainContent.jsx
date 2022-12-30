import { useState, useEffect } from 'react';

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
    <div className="main-content">
      <header></header>
      <div className="notas-fiscais-label">
        <h3>Notas fiscais</h3>
        <p>Visualize as notas fiscais que você tem.</p>
      </div>

      <table>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
        </tr>
        {
          orders.map((order, key) => {
            const { orderNumber, emissionDate, value, buyer, provider } = order;
            const [year, month, day] = emissionDate.replace(/T.+/, "").split("-");
            const money = new Intl
              .NumberFormat(undefined, { style: "currency", currency: "BRL" })
              .format(value);

            return (
              <tr key={ key }>
                <td>{ orderNumber }</td>
                <td>{ buyer.name }</td>
                <td>{ provider.name }</td>
                <td>{ `${day}/${month}/${year}` }</td>
                <td>{ money }</td>
                <td>RECEBIDO</td>
                <button>Dados do cedente</button>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
};

export default MainContent;