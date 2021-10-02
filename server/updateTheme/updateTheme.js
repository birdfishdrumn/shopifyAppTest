import Axios from "axios";
const themeApi = "/admin/api/2021-07/";

export function updateTheme(shop, accessToken) {
  const axios = Axios.create({
    baseURL: `https://${shop}/${themeApi}`,
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": accessToken,
    },
  });
  getThemeId(axios);
}

async function getThemeId(axios) {
  const { data } = await axios.get("/themes.json");
  console.log("themeData", data);
  const mainTheme = data.themes.find((theme) => theme.role === "main");
  if (!mainTheme) {
    console.log("not found theme");
    return;
  }
  console.log("maint", mainTheme);
  return mainTheme.id;
}
