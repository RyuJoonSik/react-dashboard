import { PureComponent } from "react";
import "./NavigationList.scss";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

class NavigationList extends PureComponent {
  render() {
    // console.log("Navigation-List - rendering");
    const { LIST, isClicked, handleClick } = this.props;

    return (
      <li>
        <button
          onClick={() => {
            handleClick(LIST.id);
          }}
          className={"nav-btn" + (isClicked ? " nav-btn--isClicked" : "")}
        >
          {LIST.icon}
          {LIST.title}
          {LIST.hasOwnProperty("subLists") && (
            <div>{isClicked ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</div>
          )}
        </button>
        {LIST.hasOwnProperty("subLists") && isClicked && (
          <ul>
            {LIST.subLists.map((subList, idx) => (
              <li key={idx}>
                <button className="nav-btn nav-btn--sub">{subList}</button>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }
}

export default NavigationList;
