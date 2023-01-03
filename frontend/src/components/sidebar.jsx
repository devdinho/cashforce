import CashforceLogo from "./CashforceLogo";
import CashforceHands from "./CashforceHands";

const Sidebar = () => {

  return (
    <nav className="sidebar">
      <div className="logo-container">
        <CashforceLogo />
      </div>
      <div className="menu-item">
        <CashforceHands stroke="#00AD8C" />
        <p>Notas fiscais</p>
      </div>
    </nav>
  );
};

export default Sidebar;