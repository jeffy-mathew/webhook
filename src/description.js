import { Col, Descriptions, Empty, Row } from "antd";

import 'antd/dist/antd.css';

const RequestDescription = ({ focusedRequest }) => {
    if (focusedRequest !== undefined) {
        return (
            <>
                <Row>
                    <Col span={12} >
                        <Descriptions title="Request Details" bordered style={{ padding: "10px" }} column={1} layout="horizontal">
                            <Descriptions.Item label="ID">{focusedRequest._id}</Descriptions.Item>
                            <Descriptions.Item label={focusedRequest.method}>{focusedRequest.url}</Descriptions.Item>
                            <Descriptions.Item label="Epoch Timestamp">{focusedRequest.epoch_time_stamp}</Descriptions.Item>
                            <Descriptions.Item label="Host">{focusedRequest.host}</Descriptions.Item>
                        </Descriptions>
                    </Col>
                    <Col span={12}  >
                        <Descriptions title="Headers" bordered style={{ padding: "10px" }} column={1} layout="horizontal">
                            {Object.entries(focusedRequest.headers).map(([key, value]) => (
                                <Descriptions.Item label={key}>{value}</Descriptions.Item>
                            ))}
                        </Descriptions>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} >
                        <div>
                            <Descriptions title="Query Params" bordered style={{ padding: "10px" }} column={1} layout="horizontal">
                                {

                                    focusedRequest.query_params && Object.keys(focusedRequest.query_params).length > 0
                                        ?
                                        Object.entries(focusedRequest.query_params).map(([key, value]) => (
                                            <Descriptions.Item label={key}>{value}</Descriptions.Item>
                                        ))
                                        : <div>(empty)</div>
                                }
                            </Descriptions>
                        </div>
                    </Col>
                    <Col span={12} >

                        <div>
                            <Descriptions title="Form Values" bordered style={{ padding: "10px" }} column={1} layout="horizontal">

                                {
                                    focusedRequest.form_values
                                        ?
                                        Object.entries(focusedRequest.form_values).map(([key, value]) => (
                                            <Descriptions.Item label={key}>{value}</Descriptions.Item>
                                        ))
                                        : <div>(empty)</div>
                                }
                            </Descriptions>
                        </div>
                    </Col>
                </Row>

            </>

        )
    }
    return (
        <Col span={24}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Col>

    )
}

export default RequestDescription