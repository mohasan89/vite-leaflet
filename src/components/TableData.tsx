import data, { RowType } from "../assets/tableData";

import { useDispatch } from "react-redux";
import { GET_NEW_ROUTE } from "../store/constants/routeConstants";

import { Table } from "antd";

const columns = [
  {
    title: "Номер заявки",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Координаты от (lat)",
    dataIndex: ["start", "lat"],
    key: "start_lat",
  },
  {
    title: "Координаты от (lng)",
    dataIndex: ["start", "lng"],
    key: "start_lng",
  },
  {
    title: "Координаты до (lat)",
    dataIndex: ["end", "lat"],
    key: "end_lat",
  },
  {
    title: "Координаты до (lng)",
    dataIndex: ["end", "lng"],
    key: "end_lng",
  },
];

const CoordTable = () => {
  const dispatch = useDispatch();

  const rowClickHandler = (record: RowType) => {
    dispatch({ type: GET_NEW_ROUTE, payload: { start: record.start, end: record.end } });
  };

  return (
    <Table
      dataSource={data}
      columns={columns}
      rowClassName="row-class"
      rowKey="id"
      pagination={false}
      onRow={(record, index) => {
        return {
          onClick: () => {
            rowClickHandler(record);
          },
        };
      }}
    />
  );
};

export default CoordTable;
