/**
 * @ dev "WebSocket connection closed" issue, it was due to the WebSocket connection being closed unexpectedly or due to a timing issue. One common reason for this could be that the component is unmounting before the WebSocket connection is fully established.
 * @ params To address this problem, i modify the cleanup function in the useEffect hook to check if the WebSocket connection is open before attempting to close it. This can help prevent the connection from being closed prematurely.
 */




// import React, { useEffect, useState } from 'react';
// import { w3cwebsocket as W3CWebSocket } from 'websocket';

// const client = new W3CWebSocket('ws://localhost:55455');

// const PylonConnector = () => {
//     const [latency, setLatency] = useState(null);

//     useEffect(() => {
//         client.onmessage = (message) => {
//             console.log('Received message', message.data);
//             setLatency(new Date().getTime() - parseInt(message.data));
//         };

//         return () => {
//             client.close();
//         };
//     }, []);

//     return (
//         <span className="PylonConnector">
//             {latency}
//         </span>
//     );
// };

// export default PylonConnector;






import React, { useEffect, useState, useMemo } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const PylonConnector = () => {
    const [latency, setLatency] = useState(null);

    const client = useMemo(() => new W3CWebSocket('wss://ip-analyzer-2-0-0.onrender.com'), []);

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket connection established');
        };

        client.onmessage = (message) => {
            console.log('Received message', message.data);
            setLatency(new Date().getTime() - parseInt(message.data));
        };

        return () => {
            if (client.readyState === client.OPEN) {
                client.close();
                console.log('WebSocket connection closed');
            }
        };
    }, [client]);

    return (
        <span className="PylonConnector">
            {latency}
        </span>
    );
};

export default PylonConnector;
