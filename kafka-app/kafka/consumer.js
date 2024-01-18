import { kafka } from "./client.js";

async function init(){
const consumer = kafka.consumer({groupId:"user-1"})
console.log("consumer connecting")
await consumer.connect()
console.log("COnsumer connected")
await consumer.subscribe({topic:"rider-updates",fromBeginning:true})

await consumer.run({
    eachMessage:async   ({topic,partition,message,heartbeat,pause})=>{
        console.log(`[${topic}]:part:${partition}:`,message.value.toString())
    }
}) 
}

init()