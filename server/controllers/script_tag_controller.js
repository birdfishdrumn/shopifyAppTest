import axios from "axios";

export const createScriptTag = async (shop) => {
  const url = getCreateScriptTagUrl(shop, token);
  const headers = {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": token,
  };
  const body = {
    script_tag: {
      event: "onload",
      src: "https://google.com",
    },
  };
  try {
    const result = await axios.post(url, body, headers);
    console.log(result.data);
  } catch (e) {
    console.error("Error", e);
  }
};

function getBaseUrl(shop) {
  return `https://${shop}`;
}

function getAllScriptTagsUrl(shop) {
  return `${getBaseUrl(shop)}/admin/api/2021-07/script_tags.json`;
}

function getScriptTagUrl(shop, id) {
  return `${getBaseUrl(shop)}/admin/api/2021-07/script_tags/${id}.json`;
}

function getCreateScriptTagUrl(shop) {
  return `${getBaseUrl(shop)}/admin/api/2021-07/script_tags.json`;
}

function getDeleteScriptTagUrl(shop, id) {
  return `${getBaseUrl(shop)}/admin/api/2021-07/script_tags/${id}.json`;
}
