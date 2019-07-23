import ajax from "@/api/fetch";
export const state = () => ({});
export const actions = {
  async nuxtServerInit({ commit, getters, dispatch }, { req, res }) {
      console.log(req, "req的数据");
    await Promise.all([
      dispatch("global/getListData")
    ]);
  }
};
