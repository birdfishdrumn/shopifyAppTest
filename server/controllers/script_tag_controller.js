import axios from "axios";
import { DataType } from "@shopify/shopify-api";

export const createScriptTag = async (client) => {
  if (client) {
    const data = {
      script_tag: {
        event: "onload",
        src: "https://google.com",
      },
    };
    const result = await client.post({
      path: "script_tags",
      data,
      type: DataType.JSON,
    });
    console.log("Result", result);
    return result;
  }
  console.error("could not make the res request as the client");
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
