import React, { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = (props) => {
  // console.log(props);
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionSize = 5;
  let portionsCount = Math.ceil(pagesCount / portionSize);

  let [currentPortion, setCurrentPortion] = useState(1);
  if (currentPortion > portionsCount) {
    currentPortion = portionsCount;
  }
  if (currentPortion < 1) {
    currentPortion = 1;
  }

  let leftSideOfPortion = (currentPortion - 1) * portionSize + 1;
  let rightSideOfPortion = currentPortion * portionSize;

  console.log(leftSideOfPortion);
  console.log(rightSideOfPortion);

  const prevPortion = () => {
    setCurrentPortion(--currentPortion);
  };

  const nextPortion = () => {
    setCurrentPortion(++currentPortion);
  };
  var arrowPrev = "\u261A";
  var arrowNext = "\u261B";
  return (
    <div className={s.paginator}>
      {currentPortion > 1 && (
        <button className={s.buttonPrev} onClick={prevPortion}>
          {arrowPrev}
        </button>
      )}
      {pages
        .filter((p) => p >= leftSideOfPortion && p <= rightSideOfPortion)
        .map((p) => {
          return (
            <span
              key={p}
              className={
                s.page + " " + (props.currentPage === p ? s.currentPage : " ")
              }
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {currentPortion < portionsCount && (
        <button className={s.buttonNext} onClick={nextPortion}>
          {arrowNext}
        </button>
      )}
    </div>
  );
};

export default Paginator;
