import { Descriptions } from "antd";


const RequestDescription = ({focusedRequest}) => {
    if (focusedRequest !== undefined) {
        return (
            <Descriptions title="Request Details" bordered layout="horizontal">
                <Descriptions.Item label="Method">{focusedRequest.method}</Descriptions.Item>
                <Descriptions.Item label="ID">{focusedRequest.id}</Descriptions.Item>
                <Descriptions.Item label="Epoch Timestamp">{focusedRequest.epoch_timestamp}</Descriptions.Item>
                <Descriptions.Item label="host">{focusedRequest.host}</Descriptions.Item>
            </Descriptions>
        )
    }
    return (
        <div>
            Select a request to view more details
        </div>
    )
}

export default RequestDescription