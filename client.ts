import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379',
});

async function connectToRedis() {
  await client.connect();
  console.log(`Client connected to redis`);
  await client.subscribe('livechat', (msg: string) => {
    console.log(`New Message:- ${msg}`);
  });

  client.on('error', (e) => {
    console.error(e);
  });
}

connectToRedis();
