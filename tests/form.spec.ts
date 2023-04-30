import { test, expect } from "@playwright/test";

test("has good form title", async ({ page }) => {
  await page.goto("http://localhost:3000");
  // Expect the h2 contain the following text.
  await expect(page.locator("h2")).toContainText("Vos informations personnelles");
});

test("has next step button disable while form is not filled yet", async ({ page }) => {
  await page.goto("http://localhost:3000");
  // Expect the h2 contain the following text.
  const suivantButton = await page.locator('button:text("Suivant")');
  const isButtonDisabled = await suivantButton.isDisabled();
  await expect(isButtonDisabled).toBe(true);
});
