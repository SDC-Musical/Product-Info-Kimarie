import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '20s', target: 25 },
    { duration: '10s', target: 50 },
    { duration: '30s', target: 75 },
    { duration: '2m', target: 100 },
    { duration: '1m30s', target: 0 },
  ],
};

export default function () {
  let res = http.get('http://localhost:3004/api/products/9888888');
  check(res, { 'status was 200': (r) => r.status == 200 });
  check(res, { 'status was 404': (r) => r.status == 404 });
  sleep(1);
}
