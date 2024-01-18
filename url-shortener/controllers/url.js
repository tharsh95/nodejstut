import { URL } from "../models/url.js";
import { nanoid } from "nanoid";

export async function generateUrl(req, res) {
  const shortId = nanoid();
  await URL.create({
    shortId,
    redirectUrl: req.body.url,
  });
  res.status(200).json(shortId);
}

export async function getRedirect(req, res) {
  const result = await URL.findOneAndUpdate(
    { shortId: req.params.shortId },
    { $push: { visitHistory: { ip: req.ip } } }
  );
  res.redirect(result.redirectUrl);
}
