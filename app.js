const puppeteer = require('puppeteer');

async function Bot(){
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto('https://web.whatsapp.com', { waitUntil: 'networkidle0' });
  await page.waitFor(10000);

  //._3TEwt é a classe do elemento que eu quero clicar, e que vai ter o titulo com o nome do contato que eu salvei no celular
  await page.click('._3TEwt span[title="Princesa De Konoha 🍃"]');
  await page.waitFor(10000);

  //._3F6QL._2WovP são duas classes que envolvem o input de texto. Ele vai clicar nele e escrever a mensagem abaixo
  await page.type('._3F6QL._2WovP', "Testando bot para whats <3");
  await page.waitFor(1000);

  //vai clicar no botão de enviar
  await page.click('span[data-icon="send"]');


}

Bot();