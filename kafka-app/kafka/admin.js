import {kafka} from '../client.js'



async function init() {
  const admin = kafka.admin();
  console.log("admin connecting");
  admin.connect();
  console.log("admin connected");

  console.log("creating topicsn [rider-updates]")
  await admin.createTopics({
      topics: [
          {
              topic: "rider-updates",
              numPartitions: 2,
            },
        ],
    });
    console.log("topic created [rider-updates]")
    await admin.disconnect()
}
init()