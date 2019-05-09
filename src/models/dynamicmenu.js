import { getDynamicmenu } from '@/services/dynamicMenu';

export default {
  namespace: 'dynamicmenu',

  state: {
    menuData: [],
  },

  effects: {
    *getDynamicmenu(_, { call, put }) {
      const response = yield call(getDynamicmenu);
      yield put({
        type: 'getDynamicmenuSuccess',
        payload: response,
      });
    },
  },

  reducers: {
    getDynamicmenuSuccess(state, action) {
      return {
        ...state,
        menuData: action.payload,
      };
    },
  },
};
