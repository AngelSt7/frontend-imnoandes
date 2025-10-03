import crypto from "crypto";

export const hashKey = (filters: string) => {
    return "properties-" + crypto.createHash("md5").update(filters).digest("hex");;
};