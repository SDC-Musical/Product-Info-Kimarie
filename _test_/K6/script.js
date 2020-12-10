import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 25 },
    { duration: '2m', target: 50 },
    { duration: '3m', target: 0 }
  ],
};

export default function () {
  const BASE_URL = 'https://localhost:3004/';

  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/api/products/1/`,
      null,
      { tags: { name: 'PublicCrocs' } },
    ],
    // [
    //   'GET',
    //   `${BASE_URL}/public/crocodiles/2/`,
    //   null,
    //   { tags: { name: 'PublicCrocs' } },
    // ],
    // [
    //   'GET',
    //   `${BASE_URL}/public/crocodiles/3/`,
    //   null,
    //   { tags: { name: 'PublicCrocs' } },
    // ],
    // [
    //   'GET',
    //   `${BASE_URL}/public/crocodiles/4/`,
    //   null,
    //   { tags: { name: 'PublicCrocs' } },
    // ],
  ]);

  check(responses, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

/* Notes for extended testing as I scale up
    { duration: '2m', target: 100 }, // below normal load
    { duration: '5m', target: 100 },
    { duration: '2m', target: 200 }, // normal load
    { duration: '5m', target: 200 },
    { duration: '2m', target: 300 }, // around the breaking point
    { duration: '5m', target: 300 },
    { duration: '2m', target: 400 }, // beyond the breaking point
    { duration: '5m', target: 400 },
    { duration: '10m', target: 0 }, // scale down. Recovery stage.
    */
