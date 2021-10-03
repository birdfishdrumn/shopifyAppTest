import Axios from "axios";
import fs from "fs";
import path from "path";
const themeApi = "/admin/api/2021-07/";

export async function updateTheme(shop, accessToken) {
  const axios = Axios.create({
    baseURL: `https://${shop}/${themeApi}`,
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": accessToken,
    },
  });
  const mainThemeId = await getThemeId(axios);
  if (!mainThemeId) {
    return;
  }
  const newPage = await getAssetThemeLiquid(mainThemeId, axios);
  if (newPage) {
    await uploadAssetTheme(axios, mainThemeId, newPage, "layout/theme.liquid");
  }
  // pageの名前は実際のliquidのディレクトリ構造を参照する。

  const newSnippet = getSnippetFile("../../liquid/banner-app.liquid");
  await uploadAssetTheme(
    axios,
    mainThemeId,
    newSnippet,
    "snippets/banner-app.liquid"
  );
}

function getSnippetFile(fileName) {
  return fs.readFileSync(path.resolve(__dirname, fileName), "utf-8");
}
// 既存のliquidに新しい行を追加する処理
async function uploadAssetTheme(axios, id, page, pageName) {
  const body = {
    asset: {
      key: pageName,
      value: page,
    },
  };
  try {
    await axios.put(`/themes/${id}/assets.json`, body);
    console.log(`Upload ${pageName}`);
  } catch (err) {
    console.log(err);
  }
}

async function getAssetThemeLiquid(id, axios) {
  const { data } = await axios.get(
    `/themes/${id}/assets.json?asset[key]=layout/theme.liquid`
  );
  console.log("Theme liquid", data);
  if (!data.asset.value) {
    return;
  }

  const snippet = getSnippetFile("../../liquid/theme.liquid");

  let newPage = data.asset.value;
  if (newPage.includes(snippet)) {
    console.log("page already exists");
    return;
  }
  // {% %}のインデントに注意
  newPage = data.asset.value.replace(
    "{% section 'header' %}",
    `\n{% section 'header' %}\n${snippet}\n`
  );
  return newPage;
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
