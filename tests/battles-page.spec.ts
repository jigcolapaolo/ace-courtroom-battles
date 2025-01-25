import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const yesBtn = page.locator("dialog.spoiler-dialog").locator("button.spoiler-dialog-yes-btn")
    await yesBtn.click()
    await page.goto('/battles');
})

test('Should show navbar (logo and links)', async ({ page }) => {
    const logo = page.locator('[alt="Ace Logo"]');
    const navbarLinks = page.locator('nav').locator('a');
    const homeLink = navbarLinks.nth(0);
    const charactersLink = navbarLinks.nth(1);
    const battlesLink = navbarLinks.nth(2);
    const rankingsLink = navbarLinks.nth(3);

    await expect(logo).toBeVisible();

    await expect(homeLink).toHaveAttribute('href', '/');
    await expect(charactersLink).toHaveAttribute('href', '/characters');
    await expect(battlesLink).toHaveAttribute('href', '/battles');
    await expect(rankingsLink).toHaveAttribute('href', '/rankings');

    await expect(homeLink).toContainText('HOME');
    await expect(charactersLink).toContainText('CHARACTERS');
    await expect(battlesLink).toContainText('BATTLES');
    await expect(rankingsLink).toContainText('RANKINGS');
})

test('Should show page description', async ({ page }) => {
    const pageTitle = page.locator('h3:text("Courtroom Battles")');
    const pageDescription = page.locator('h3:text("Courtroom Battles") + p');

    await expect(pageTitle).toBeVisible();
    await expect(pageDescription).toBeVisible();
})

test('Should show at least 4 battles links', async ({ page }) => {

    const linksContainer = page.locator('article');
    const battleLinks = linksContainer.locator('a');

    let visibleLinksCount = 0
    for (let i = 0; i < 4; i++) {
        if (await battleLinks.nth(i).isVisible()) visibleLinksCount++
    }

    expect(visibleLinksCount).toBeGreaterThanOrEqual(4)
    
})

test('Should show 2 characters imgs and a versus text on the links', async ({ page }) => {
    const linksContainer = page.locator('article');
    const battleLink = linksContainer.locator('a').nth(1);

    const charactersImgs = battleLink.locator('img');
    const versusText = battleLink.locator('h3.versus-text');

    await expect(charactersImgs).toHaveCount(2);
    await expect(versusText).toBeVisible();
})

test('Should navigate to battle page when a battle link is clicked', async ({ page }) => {
    const linksContainer = page.locator('article');
    const battleLink = linksContainer.locator('a').nth(1);

    await battleLink.click()

    await expect(page).toHaveURL(/\/battles\/[a-zA-Z0-9]+-vs-[a-zA-Z0-9]+$/);
})