import "antd/dist/antd.css";
import React from 'react';
import "./index.css";
import { Layout, Menu, Card, Badge, Descriptions } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import {focusChange} from "./reducers/focusedRequestReducer";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import RequestDescription from "./description";
const { Header, Sider, Content, Footer } = Layout;

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

const Homepage = () => {
    const dispatch = useDispatch()
    const {requests, focusedRequestId} = useSelector(({requests, focusedRequestId}) =>{ return {requests, focusedRequestId}})
    return (
        <Layout>
            <Sider
            style={{ height: "100vh" }}
            width={400}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="vertical">
                    {requests.map((request) => (
                        <Menu.Item
                        
                            style={{ height: "16vh" }}
                            key={request.id}
                            onClick={() => {
                                console.log("clicked", request.id, request.method);
                                dispatch(focusChange(request.id))
                            }}
                        >
                            <Badge.Ribbon
                                text={request.method}
                                color={getBadgeColor(request.method)}
                            >
                                <Card
                                    style={{ height: "16vh" }}
                                    title={request.id} size="small">
                                    {request.epoch_timestamp}
                                </Card>
                            </Badge.Ribbon>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <RequestDescription focusedRequest={requests.find((request)=> {return request.id === focusedRequestId})}/>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default Homepage


