import fetch from "./fetch";

export default class Api {
  static getList() {
    return fetch("/api/members/list", {
      method: "get"
    });
  }
}
