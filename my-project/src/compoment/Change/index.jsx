import { AiOutlineMobile, AiFillAppstore } from "react-icons/ai";
const Change = ({ isChange, setIsChange }) => {
  return (
    <div
      className="tooltip  tooltip-bottom "
      data-tip={isChange ? "Web" : "App"}
      onClick={() => setIsChange(!isChange)}
    >
      <button className="btn">
        {isChange ? <AiFillAppstore /> : <AiOutlineMobile />}
      </button>
    </div>
  );
};

export default Change;
