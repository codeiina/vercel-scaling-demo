// api/hello.js
const INSTANCE_ID = Math.random().toString(36).slice(2);

export default function handler(req, res) {
  console.log(INSTANCE: ${INSTANCE_ID} | TIME: ${new Date().toISOString()});
  res.status(200).json({
    message: "Hello from Vercel instance!",
    instance: INSTANCE_ID,
    time: new Date().toISOString(),
  });
}
