import { stringify } from 'qs';
import request from '@/utils/request';


export async function getDynamicmenu() {
  return request('/DynamicMenu/getDynamicMenu');
}
