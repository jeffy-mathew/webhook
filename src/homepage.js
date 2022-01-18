import "antd/dist/antd.css";
import React from 'react';
import "./index.css";
import { useEffect } from "react";
import { Layout, Menu, Card, Badge, Empty } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { focusChange } from "./reducers/focusedRequestReducer";
import RequestDescription from "./description";

import { initializeRequests } from './reducers/requestsReducer';

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

const getDate = (epoch) => {
    const dateObject = new Date(epoch * 1000)
    return dateObject.toLocaleString()
}

const Homepage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(initializeRequests(id));
    }, [id])
    const { requests, focusedRequestId } = useSelector(({ requests, focusedRequestId }) => { return { requests, focusedRequestId } })
    return (
        <Layout>
            <Sider
                style={{ height: "100vh" }}
                width={400}
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div className="logo" />
                <Menu theme="dark" mode="vertical">
                    {
                        requests
                            ? requests.map((request) => (
                                <Menu.Item
                                    style={{ height: "8vh" }}
                                    key={request._id}
                                    onClick={() => {
                                        dispatch(focusChange(request._id))
                                    }}
                                >
                                    <Badge.Ribbon
                                        text={request.method}
                                        color={getBadgeColor(request.method)}
                                    >
                                        <Card className="custom-card"
                                            style={{ height: "10vh" }}
                                            // bodyStyle={{ padding: "0" }}
                                            title={request.id} size="small">
                                            {getDate(request.epoch_time_stamp)}
                                        </Card>
                                    </Badge.Ribbon>
                                </Menu.Item>
                            ))
                            : <div>Waiting for first request</div>
                    }
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content>
                    {
                        requests
                            ? <RequestDescription focusedRequest={requests.find((request) => { return request._id === focusedRequestId })} />

                            : <Empty />
                    }

                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>

        </Layout>
    );
}

export default Homepage


