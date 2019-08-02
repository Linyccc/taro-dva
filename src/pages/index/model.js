import action from "../../utils/action";
import { load } from "./service";

export default {
  namespace: "home",
  state: { list: [] },

  effects: {
    *load({ payload }, { call, put }) {
      let { resultData } = yield call(load, payload);
      yield put({
        type: "save",
        payload: resultData
      });
    }
  },
  reducers: {
    save(state, action) {
      return { ...state, list: action.payload };
    }
  }
};
