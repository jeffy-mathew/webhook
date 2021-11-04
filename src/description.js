import { Descriptions } from "antd";


const RequestDescription = ({focusedRequest}) => {
    console.log("focusedrequest value", focusedRequest)
    if (focusedRequest !== undefined) {
        return (
            <Descriptions title="Request Info" layout="vertical">
                <Descriptions.Item label="Method">{focusedRequest.method}</Descriptions.Item>
                <Descriptions.Item label="ID">{focusedRequest.id}</Descriptions.Item>
                <Descriptions.Item label="Epoch Timestamp">{focusedRequest.epoch_timestamp}</Descriptions.Item>
                <Descriptions.Item label="host">{focusedRequest.host}</Descriptions.Item>
            </Descriptions>
        )
    }
    return (
        <div>
            Select a reqeust to view more details
        </div>
    )
}

export default RequestDescription