var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
    keyPath: './certs/private.pem.key',
    certPath: './certs/device-certificate.pem.crt',
    caPath: './certs/AmazonRootCA1.pem',
    clientId: 'wanderalert-client',
    host: 'a2heouppm0pu48-ats.iot.us-east-1.amazonaws.com'
});

device.on('connect', function() {
    console.log('Connected to AWS IoT');
    
    // Subscribe to the IoT topic
    device.subscribe('wanderalert/door', function() {
      console.log('Subscribed to topic: wanderalert/door');

      // Array of sample timestamps for simulation
      const timestamps = [
          "15-01-2025 03:45:45",
          "15-01-2025 08:30:12",
          "01-02-2025 11:15:20",
          "02-02-2025 14:50:35",
          "03-02-2025 17:25:40",
      ];

      // Index to keep track of current message
      let index = 0;

      // Function to publish messages with a delay
      function publishMessage() {
          if (index < timestamps.length) {
              const message = {
                  doorStatus: "opened",
                  timestamp: timestamps[index]
              };
              device.publish('wanderalert/door', JSON.stringify(message));
              console.log('Published message:', message);

              index++;  // Move to the next timestamp
          } else {
              console.log('All messages published.');
              clearInterval(timer);  // Stop the interval
          }
      }

      // Publish a message every 1 minute
      const timer = setInterval(publishMessage, 60000);
    });
});

device.on('message', function(topic, payload) {
    console.log('Received message from topic:', topic);
    console.log('Message payload:', payload.toString());
});