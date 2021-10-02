import Router from "koa-router";
import { DataType } from "@shopify/shopify-api";
import {
  createScriptTag,
  deleteScriptTagById,
  getAllScriptTags,
} from "../controllers/script_tag_controller";
import Shopify from "@shopify/shopify-api";
const router = new Router({ prefix: "/script_tag" });

router.get("/", async (ctx) => {
  ctx.body = "Get Script Tag";
});

router.get("/all", async (ctx) => {
  const result = await getAllScriptTags(ctx.myClient, "https://google.com/");
  ctx.body = {
    installed: result.length > 0,
    details: result,
  };
});

router.post("/", async (ctx) => {
  console.log("create script tag", ctx.sesionFromToken);
  // const { shop, accessToken } = ctx.sesionFromToken;

  // const session = await Shopify.Utils.loadCurrentSession(ctx.req, ctx.res)
  // console.log("session from token", session)
  // await createScriptTag(session.shop, session.accessToken);
  await createScriptTag(ctx.myClient);
  ctx.body = "Create a Script Tag";
});
router.delete("/", async (ctx) => {
  const id = ctx.query.id;
  const result = await deleteScriptTagById(ctx.myClient, id);
  ctx.body = result;
});

export default router;
