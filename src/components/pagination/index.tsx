import React, { useState } from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  cP: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, cP, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(cP ? cP : 1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxPageNumbers = 5; // Số lượng nút trang tối đa được hiển thị

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Nếu tổng số trang nhỏ hơn hoặc bằng maxPageNumbers, hiển thị tất cả
    if (totalPages <= maxPageNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li key={i} className={i === currentPage ? 'active' : ''}>
            <button onClick={() => handlePageChange(i)}>{i}</button>
          </li>
        );
      }
    } else {
      let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
      let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

      if (endPage - startPage < maxPageNumbers - 1) {
        startPage = Math.max(1, endPage - maxPageNumbers + 1);
      }

      if (startPage > 1) {
        pageNumbers.push(
          <li key={1}>
            <button onClick={() => handlePageChange(1)}>1</button>
          </li>
        );
        if (startPage > 2) {
          pageNumbers.push(<li key="startEllipsis">...</li>);
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <li key={i} className={i === currentPage ? 'active' : ''}>
            <button onClick={() => handlePageChange(i)}>{i}</button>
          </li>
        );
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push(<li key="endEllipsis">...</li>);
        }
        pageNumbers.push(
          <li key={totalPages}>
            <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
          </li>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <ul>
        {renderPageNumbers()}
      </ul>
    </div>
  );
};

export default Pagination;
