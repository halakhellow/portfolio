import { Link } from "react-router-dom";

import "./SectionItem.css";

type SectionItemProps = {
  name: string;
  faClass: string;
};

const SectionItem = ({ name, faClass }: SectionItemProps) => {
  const linkRef = name === "Portfolio" ? "work" : name.toLowerCase();
  return (
    <Link to={`/${linkRef}`} className="section-item">
      <div className="section-item-infos">
        <span className={`${faClass} section-item-icon`}></span>
        <p className="section-item-name">{name}</p>
      </div>
    </Link>
  );
};

export default SectionItem;
