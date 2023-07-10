import { Pagination } from "@mui/material";

const CustomPagination = ({ page, setPage, total_pages = 10 }) => {
  function handleChange(e, value) {
    console.log(value);
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <Pagination
      color="primary"
      count={total_pages > 500 ? 500 : total_pages}
      page={page}
      onChange={handleChange}
    ></Pagination>
  );
};

export default CustomPagination;
