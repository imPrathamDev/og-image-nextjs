// import playwright from "playwright-aws-lambda";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `https://og-image-nextjs.vercel.app/invoice`;
  // const url = `https://og-image-nextjs.vercel.app/invoice`;
  if (process.env.PRODUCTION == "false") {
    const playwright = require("playwright");
    try {
      const browser = await playwright.chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();

      // await context.route("**.jpg", (route) => route.abort());
      await page.goto(url);

      //   const result = await page.screenshot({ fullPage: true });
      await page.pdf({ path: `invoice.pdf` });

      // res.json({ status: true, result: result.toString("base64") });
      // res.setHeader("Content-Type", "application/pdf");
      // res.send(result);

      const file = fs.readFileSync("./invoice.pdf");
      res.setHeader("Content-type", "application/pdf");
      res.send(file);

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

      //   const result = await page.screenshot({ fullPage: true });
      const result = await page.pdf();

      res.setHeader("Content-type", "application/pdf");
      res.send(result);
      // res.json({ status: true, result: result.toString("base64") });
      //   res.setHeader("Content-Type", "image/png");
      //   res.send(result);
    } catch (error) {
      throw error;
    } finally {
      if (browser) {
        await browser.close();
      }
    }
  }
}
