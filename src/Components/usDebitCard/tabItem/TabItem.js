import "./TabItem.css";

const TabItem = (props) => {
  const { tabDetails, active, onClickOn } = props;

  return (
    <li className="tab-item">
      <button
        className={`tab-item-button ${active ? "active-tab" : ""}`}
        type="button"
        onClick={() => onClickOn(tabDetails.id)}
      >
        {tabDetails.tabName}
      </button>
    </li>
  );
};

export default TabItem;