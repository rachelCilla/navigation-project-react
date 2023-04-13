import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [exapandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    exapandedIndex === nextIndex
      ? setExpandedIndex(-1)
      : setExpandedIndex(nextIndex);
  };

  //index is optional second argument of map method
  const renderedItems = items.map((item, index) => {
    // isExpanded = true or false
    const isExpanded = index === exapandedIndex;
    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />} </span>
    );

    return (
      <div key={item.id}>
        {/* LABEL */}
        <div
          className="flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {/* CONTENT FOR LABEL */}
        {/* displays isExpanded only isExpanded = true */}
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
