import { Worker } from "bullmq";

const worker = new Worker('email-queue',async(job)=>{
    console.log("Got a mail",job.id)
})

worker.