import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport to match typical screen
  await page.setViewport({ width: 1200, height: 800 });

  await page.goto("http://localhost:5173", { waitUntil: "networkidle0" });

  await page.pdf({
    path: "cv-export.pdf",
    format: "A4",
    printBackground: true,
    margin: { top: "5mm", right: "5mm", bottom: "5mm", left: "5mm" },
    preferCSSPageSize: true
  });

  await browser.close();
  console.log("PDF creat: cv-export.pdf");
})();