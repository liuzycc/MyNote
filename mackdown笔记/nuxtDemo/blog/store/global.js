import ajax from "@/api/ajax";
export const state = () => ({
  list: []
});
export const mutations = {
  setList(state, payload) {
    state.list = payload;
  }
};
export const getters = {
    getlist(state,n) {
        return state.list
    }
}
export const actions = {
  async getListData({ commit }) {

    const res = await ajax.get("http://febackboard-api.ziroom.com/api/members/list");

    commit("setList", res.data.list);
  }
};
