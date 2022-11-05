// import playwright from "playwright-aws-lambda";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, desc, imageURL, price, discPrice } = req.query;
  const url = `https://og-image-nextjs.vercel.app?title=${title}&desc=${desc}&price=${price}&discPrice=${discPrice}&imageURL=${imageURL}`;

  if (process.env.PRODUCTION == "false") {
    const playwright = require("playwright");
    try {
      const browser = await playwright.chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();

      // await context.route("**.jpg", (route) => route.abort());
      await page.goto(url);

      const result = await page.screenshot({ fullPage: true });

      // res.json({ status: true, result: result.toString("base64") });
      res.setHeader("Content-Type", "image/png");
      res.send(result);

      await context.close();
      await browser.close();
    } catch (error) {
      res.json({ status: false, error });
    }
  } else {
    const playwright = require("playwright-aws-lambda");
    let browser = null;

    try {
      browser = await playwright.launchChromium();
      const context = await browser.newContext();

      const page = await context.newPage();
      await page.goto(url);

      const result = await page.screenshot({ fullPage: true });

      // res.json({ status: true, result: result.toString("base64") });
      res.setHeader("Content-Type", "image/png");
      res.send(result);
    } catch (error) {
      throw error;
    } finally {
      if (browser) {
        await browser.close();
      }
    }
  }
}
