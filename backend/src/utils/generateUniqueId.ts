import * as crypto from "crypto";

export default function generateUniqueId() {
  return crypto.randomBytes(4).toString("hex");
}
