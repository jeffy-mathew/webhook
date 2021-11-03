import { useState, useEffect } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const App = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    axios.get("https://c1a1aa44-4766-472c-9557-58c282598e43.mock.pstmn.io/requests").then((response) => {
      console.log("request response", response);
      setRequests(response.data);
    });
  }, []);
return (
  
  <Layout  style={{height:"100vh"}}>
      <Sider width={200} className="site-layout-background" >
      
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={['2']}>
        {
        requests.map(request => (
          <Menu.Item key={request.id} onClick={()=> {console.log("clicked", request.id, request.method)} }>{request.id}</Menu.Item>
        ))
        }
        </Menu>
      
      </Sider>
  </Layout>
);
}

export default App