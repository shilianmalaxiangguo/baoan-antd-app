// @ts-ignore
/* eslint-disable */
import {request} from "umi";

/** 获取当前的用户 GET /api/currentUser */
export async function getBanner(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/banner?type=2', {
    method: 'GET',
    ...(options || {}),
  });
}
