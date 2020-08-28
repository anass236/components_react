import React, { useEffect, useState } from "react";
import UserService from "../../services/user-service";
import TimelineItem from "./TimelineItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Paper } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "./pagination/Pagination";

function TimeLine() {
  const [items, setItems] = useState(null);
  const [month, setMonth] = useState("1");
  const [year, setYear] = useState("2020");
  const [numberYear, setNumberYear] = useState([]);
  const [page, setPage] = useState("1");
  const [nombrePages, setNombrePages] = useState(1);
  const [limit, setLimit] = useState("30");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    UserService.getStocksByMonthAndYear(month, year, page, limit).then(
      ({ data }) => {
        setTimeout(() => {
          setItems(data["Stocks List"]);
          setNombrePages(data["pages"]);
          setNumberYear(data["years"]);
          setLoading(true);
        }, 3000);
      }
    );
  }, [month, year, page, limit]);
  const handleChangeMonth = (e) => {
    setMonth(e.target.value);
    setPage(1);
    setLoading(!loading);
  };
  const handleChangeYear = (e) => {
    setYear(e.target.value);
    setPage(1);
    setLoading(!loading);
  };
  const months = [...Array(11).keys()].map((key) => key + 1);

  return (
    <>
      <Paper className="container" style={{ margin: "40px", padding: "40px" }}>
        <div className="row">
          <div className="col">
            <FormControl variant="outlined" className="form-control">
              <InputLabel id="select-month">Month</InputLabel>
              <Select
                labelId="select-month"
                id="select-month"
                value={month}
                onChange={handleChangeMonth}
                label="Month"
              >
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                {months.map((element, i) => (
                  <MenuItem key={i} value={element}>
                    {element}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <FormControl variant="outlined" className="form-control">
              <InputLabel id="select-year">Year</InputLabel>
              <Select
                labelId="select-year"
                id="select-month"
                value={year}
                onChange={handleChangeYear}
                label="Year"
              >
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                {numberYear.map((element, i) => (
                  <MenuItem key={i} value={element}>
                    {element}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </Paper>
      <div>
        {items && loading ? (
          items.map((item, index) => (
            <TimelineItem
              key={index}
              date_of_stock={item.date_of_stock}
              name_med={item.medicament.name}
              category={item.medicament.category.name}
              to_stock={item.to_stock}
              type_med={item.medicament.type_med}
            />
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className="d-flex justify-content-center timeline-card">
        {nombrePages ? (
          <Pagination
            currentPage={page}
            pageCount={nombrePages}
            pagerCount={8}
            onPageChange={(newPage) => {
              setPage(newPage);
              setLoading(!loading);
            }}
          />
        ) : (
          <div>{nombrePages}</div>
        )}
      </div>
    </>
  );
}
export default TimeLine;
