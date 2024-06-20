import { MiddlewareHandler } from "hono";
import { HTTPException } from "hono/http-exception";
import { Resource } from "sst";

export const AuthMiddleware: MiddlewareHandler = async (c, next) => {
  const authorization = c.req.header("authorization");
  if (!authorization)
    throw new HTTPException(403, {
      message: "Authorization header is required.",
    });
  const token = authorization.split(" ")[1];
  if (!token)
    throw new HTTPException(403, {
      message: "Bearer token is required.",
    });
  if (token !== Resource.ApiKey.value) {
    throw new HTTPException(403, {
      message: "Invalid API key",
    });
  }

  return next();
};
