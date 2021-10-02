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

export const getAllScriptTags = async (client, src) => {
  if (!client) {
    console.error("could not make rest request as the client does not exist");
    return;
  }
  const result = await client.get({
    path: "script_tags",
  });
  const matchSrc = result.body.script_tags.filter((tag) => tag.src === src);
  return matchSrc;
};

export const deleteScriptTagById = async (client, id) => {
  if (!client) {
    console.error("could not make rest request as the client does not exist");
    return;
  }
  const result = await client.delete({
    path: `script_tags/${id}`,
  });
  console.log(result);
  return result;
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
