import { Pagination } from "antd";

export function View({ totalPages, currentPage, setCurrentPage }) {
  const handleOnChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <Pagination
      style={{ alignSelf: "center" }}
      onChange={handleOnChange}
      current={+currentPage}
      total={+totalPages}
    />
  );
}
