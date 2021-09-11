import Router from "koa-router";
import { createScriptTag } from "../controllers/script_tag_controller";

const router = new Router({ prefix: "/script_tag" });

router.get("/", async (ctx) => {
  ctx.body = "Get Script Tag";
});

router.get("/all", async (ctx) => {
  ctx.body = "Get all Script Tag";
});

router.post("/", async (ctx) => {
  const { shop, accessToken } = ctx.state.shopify;
  await createScriptTag(shop, accessToken);
  ctx.body = "Create Script Tag";
});
router.delete("/all", async (ctx) => {
  ctx.body = "Delete Script Tag";
});

export default router;
