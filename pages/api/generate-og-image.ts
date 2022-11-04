import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import { Puppeteer } from "puppeteer-core";

interface BodyTypes {
  title: string;
  desc: string;
  imageURL: string;
  price: string;
  discPrice: string;
}

async function getBrowserInstance() {
  const chromium = require("chrome-aws-lambda");
  const executablePath = await chromium.executablePath;

  if (!executablePath) {
    const puppeteer = require("puppeteer");
    return puppeteer.launch({
      args: chromium.args,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });
  }

  return chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let result = null;
  let browser = null;
  const { title, desc, imageURL, price, discPrice } = req.query;
  const url = `https://og-image-nextjs.vercel.app?title=${title}&desc=${desc}&price=${price}&discPrice=${discPrice}&imageURL=${imageURL}`;
  try {
    browser = await getBrowserInstance();

    let page = await browser.newPage();

    await page.goto(url);

    result = await page.screenshot();
    res.setHeader("Content-Type", "image/png");
    res.send(result);
    // return res.json({ status: true, result });
  } catch (error) {
    // return callback(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
}
