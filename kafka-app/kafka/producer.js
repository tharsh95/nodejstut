import { kafka } from "./client.js";

async function init() {
  const producer = kafka.producer();

  console.log("Connecting producer");

  await producer.connect();
  console.log("Producer Connected");
  await producer.send({
    topic: "rider-updates",
    messages: [
      {
        partition:1,
        key: "location-updates",
        value: JSON.stringify({ name: "Tony", location: "South" }),
      },
    ],
  });
  await producer.disconnect()
}
init()
