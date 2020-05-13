const puppeteer = require('puppeteer');

async function Bot(){
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto('https://web.whatsapp.com', { waitUntil: 'networkidle0' });
  await page.waitFor(10000);

  await page.click('.2_wP_Y span[title="mãe"]');
  await page.waitFor(10000);

  await page.type('._3F6QL._2WovP', "Testando bot para whats <3");
  await page.waitFor(1000);

  await page.click('span[data-icon="send"]');


}

Bot();