import React from "react";

const List = ({ content, styles }) => {
  return (
    <>
      <ul className={`list-disc ${styles}`}>
        {content.map((listItem, i) => (
          <div key={i}>
            <li>{listItem}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default List;
