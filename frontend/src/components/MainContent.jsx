const MainContent = () => {

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
        <tr>
          <td>1234</td>
          <td>SACADO 001</td>
          <td>CEDENTE 002</td>
          <td>12/02/2020</td>
          <td>$49.725,00</td>
          <td>RECEBIDO</td>
          <button>Dados do cedente</button>
        </tr>
        <tr>
          <td>1234</td>
          <td>SACADO 001</td>
          <td>CEDENTE 002</td>
          <td>12/02/2020</td>
          <td>$49.725,00</td>
          <td>RECEBIDO</td>
          <button>Dados do cedente</button>
        </tr>
        <tr>
          <td>1234</td>
          <td>SACADO 001</td>
          <td>CEDENTE 002</td>
          <td>12/02/2020</td>
          <td>$49.725,00</td>
          <td>RECEBIDO</td>
          <button>Dados do cedente</button>
        </tr>
      </table>
    </div>
  )
};

export default MainContent;