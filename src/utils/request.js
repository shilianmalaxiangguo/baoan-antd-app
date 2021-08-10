import {extend} from "umi-request";

const request = extend({
  prefix: 'http://localhost:4000',
  timeout: 1000 * 60,
  credentials: 'include', // 默认请求是否带上cookie
});
export default request
