import { createClient } from 'redis';

const server = createClient({
  url: 'redis://localhost:6379',
});

async function connectToRedis() {
  await server.connect();
  console.log(`Server on with redis`);
  //   server.publish('livechat', 'New Video is out guys');

  setInterval(() => {
    server.publish('livechat', `${Math.floor(Math.random() * 1000)}`);
  }, 300);

  server.on('error', (e) => {
    console.error(e);
  });
}

connectToRedis();
