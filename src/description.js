import { Col, Descriptions, Empty, Row } from "antd";

import 'antd/dist/antd.css';

const RequestDescription = ({ focusedRequest }) => {
    if (focusedRequest !== undefined) {
        console.log(focusedRequest)
        return (
            <>
                <Row>
                    <Col span={12} >
                        <Descriptions title="Request Details" bordered style={{ padding: "10px" }} column={1} layout="horizontal">
                            <Descriptions.Item label="ID">{focusedRequest.id}</Descriptions.Item>
                            <Descriptions.Item label={focusedRequest.method}>{focusedRequest.url}</Descriptions.Item>
                            <Descriptions.Item label="Epoch Timestamp">{focusedRequest.epoch_timestamp}</Descriptions.Item>
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
                    <div>

                    </div>
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