import type { User } from "@auth/core/types";
import { createHash } from "node:crypto";

export const generateUserId = (user?: User) => {
    if (!user || !user.email) throw new Error("User email is required");
    return createHash("sha256").update(user.email).digest("hex");
}