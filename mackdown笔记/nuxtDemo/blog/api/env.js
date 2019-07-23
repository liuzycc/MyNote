let baseUrl;
const imgBaseUrl = "http://febackboard-api.ziroom.com";

if (process.env.NODE_ENV === "development") {
  baseUrl = "http://febackboard-api.ziroom.com";
} else {
  baseUrl = "http://febackboard-api.ziroom.com";
}

export { baseUrl, imgBaseUrl };
