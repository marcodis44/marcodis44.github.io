import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderProp } from "../types/types";

const ContactDetail = ({ props }: { props: HeaderProp }) => {
  const getChildren = () => {
    return (
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={props.icon}
          className="text-tblue dark:text-light"
        />
        <p className="pl-3">{props.showValue}</p>
      </div>
    );
  };

  const outerCn = "flex mt-3 md:w-full";
  return props.wrapElement === "a" ? (
    <a href={`${props.action}:${props.value}`} className={`${outerCn}`}>
      {getChildren()}
    </a>
  ) : (
    <div className={`${outerCn}`}>{getChildren()}</div>
  );
};

export default ContactDetail;
