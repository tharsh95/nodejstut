import { Queue } from "bullmq";

const notificationQueue = new Queue("email-queue");

async function init() {
  const res = await notificationQueue.add("email to harsh", {
    email: "harsh.tiwari1995@gmail.com",
    subject: "Welcome message",
    body: "lorem",
  });
  console.log("Job added to queue",res.id)
}
init()