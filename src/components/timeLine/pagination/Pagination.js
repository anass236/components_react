/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import NextButton from "./NextPage/NextButton";
import PrevButton from "./PreviousPage/PrevButton";

import styles from "./Pagination.module.scss";

export const Pagination = ({
  currentPage,
  pageCount,
  pagerCount,
  onPageChange,
}) => {
  const halfPagerCount = (pagerCount - 1) / 2;
  const pagerCountOffset = pagerCount - 2;

  let showPrevMore = false;
  let showNextMore = false;

  if (pageCount > pagerCount) {
    if (currentPage > pagerCount - halfPagerCount) {
      showPrevMore = true;
    }

    if (currentPage < pageCount - halfPagerCount) {
      showNextMore = true;
    }
  }

  const pagesLinks = [];

  if (showPrevMore && !showNextMore) {
    const startPage = pageCount - (pagerCount - 2);
    for (let i = startPage; i < pageCount; i += 1) {
      pagesLinks.push(i);
    }
  } else if (!showPrevMore && showNextMore) {
    for (let i = 2; i < pagerCount; i += 1) {
      pagesLinks.push(i);
    }
  } else if (showPrevMore && showNextMore) {
    const offset = Math.floor(pagerCount / 2) - 1;
    for (let i = currentPage - offset; i <= currentPage + offset; i += 1) {
      pagesLinks.push(i);
    }
  } else {
    for (let i = 2; i < pageCount; i += 1) {
      pagesLinks.push(i);
    }
  }

  const handlePrevMoreClick = (offset) => {
    const newPage = currentPage - offset;
    onPageChange(newPage < 1 ? 1 : newPage);
  };

  const handleNextMoreClick = (offset) => {
    const newPage = currentPage + offset;
    onPageChange(newPage > pageCount ? pageCount : newPage);
  };

  return pageCount > 1 ? (
    <ul className={styles.pager}>
      <li onClick={() => handlePrevMoreClick(1)}>
        <PrevButton style={{ width: "24px" }} />
      </li>
      <li
        onClick={() => onPageChange(1)}
        className={currentPage === 1 ? styles.active : ""}
      >
        1
      </li>
      {showPrevMore && (
        <li onClick={() => handlePrevMoreClick(pagerCountOffset)}>...</li>
      )}

      {pagesLinks.map((pageLink) => (
        <li
          className={currentPage === pageLink ? styles.active : ""}
          onClick={() => onPageChange(pageLink)}
        >
          {pageLink}
        </li>
      ))}

      {showNextMore && (
        <li onClick={() => handleNextMoreClick(pagerCountOffset)}>...</li>
      )}
      <li
        onClick={() => onPageChange(pageCount)}
        className={currentPage === pageCount ? styles.active : ""}
      >
        {pageCount}
      </li>
      <li onClick={() => handleNextMoreClick(1)}>
        <NextButton style={{ width: "24px" }} />
      </li>
    </ul>
  ) : null;
};

export default Pagination;
