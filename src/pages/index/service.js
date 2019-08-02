import request from "../../utils/request";

export async function load(params) {
  return request({
    url:
      "https://easy-mock.com/mock/5d2bdbfe8f337566364f60b9/example/super/api",
    data: params
  });
}
