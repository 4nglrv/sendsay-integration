import got from 'got';
import { SENDSAY_API_KEY, SENDSAY_URL } from '../enviroments.js';

const sendsayClient = got.extend({
  prefixUrl: SENDSAY_URL,
  headers: {
    Authorization: `sendsay apikey=${SENDSAY_API_KEY}`,
  },
});

export default sendsayClient;
