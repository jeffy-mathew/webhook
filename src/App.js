import { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Card, Badge } from "antd";
const { Sider } = Layout;

const getBadgeColor = (method) => {
  switch (method) {
    case "POST":
      return "red";
    case "GET":
      return "green";
    case "PUT":
      return "pink";
    default:
      return "green";
  }
};
const App = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://178fb235-c752-494b-8bd5-97f48179e8fa.mock.pstmn.io/requests"
      )
      .then((response) => {
        console.log("request response", response);
        setRequests(response.data);
      });
  }, []);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width={400} className="site-layout-background">
        <Menu theme="dark" mode="vertical">
          {requests.map((request) => (
            <Menu.Item
              style={{ height: "20vh" }}
              key={request.id}
              onClick={() => {
                console.log("clicked", request.id, request.method);
              }}
            >
              <Badge.Ribbon
                text={request.method}
                color={getBadgeColor(request.method)}
              >
                <Card title={request.id} size="small">
                  {request.epoch_timestamp}
                </Card>
              </Badge.Ribbon>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </Layout>
  );
};

export default App;
