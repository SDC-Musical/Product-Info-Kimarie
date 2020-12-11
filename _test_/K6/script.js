import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

export let options = {
  thresholds: {
    errors: ['rate<0.01'], // <1% errors
  },
  stages: [
    { duration: '30s', target: 200 },
    { duration: '2m', target: 500 },
    { duration: '4m', target: 0 }
  ],
};

export default function () {
  let res = http.get('http://localhost:3004/api/products/9888888');
  const result = check(res, {
    'is status 200': (r) => r.status === 200,
  });
  sleep(1);
  errorRate.add(!result);

  // const BASE_URL = 'http://localhost:3004';

  // let responses = http.batch([
  //   [
  //     'GET',
  //     `${BASE_URL}/api/products/9999999`,
  //     null,
  //   ],
  //   [
  //     'GET',
  //     `${BASE_URL}/api/products/9899999`,
  //     null,
  //   ],
  //   [
  //     'GET',
  //     `${BASE_URL}/api/products/9888888`,
  //     null,
  //   ],
  //   [
  //     'GET',
  //     `${BASE_URL}/api/products/9959999`,
  //     null,
  //   ],
  // ]);

  // sleep(1);

  // responses.forEach((response) => {
  //   errorRate.add(!check(response, {'status is 200': (r) => r.status === 200,}));
  // });
}
