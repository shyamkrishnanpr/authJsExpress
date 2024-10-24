import { getSession } from "@auth/express";
import { authConfig } from "../config/authConfig";
import type { Request, Response, NextFunction } from "express";

export async function currentSession(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const session = await getSession(req, authConfig);
  res.locals.session = session;
  next();
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const session = await getSession(req, authConfig);
  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  next();
}
