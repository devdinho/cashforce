import CashforceLogo from "../assets/cashforce-main-logo.svg";
import Hands from "../assets/cashforce-hands.svg";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <img src={CashforceLogo} alt="" />
      <div className="menu-item">
        <img src={Hands} alt="" />
        <p>Notas fiscais</p>
      </div>
    </div>
  );
};

export default Sidebar;