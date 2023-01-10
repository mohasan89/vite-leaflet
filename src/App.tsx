import Map from "./components/Map";
import Table from "./components/TableData";

import { Row, Col } from "antd";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Row className="layout">
        <Col xs={24} sm={24} md={12} lg={12} xl={8} className="table-side">
          <Table />
        </Col>
        <Col className="map-content" xs={24} sm={24} md={12} lg={12} xl={16}>
          <Map />
        </Col>
      </Row>
    </div>
  );
}

export default App;
