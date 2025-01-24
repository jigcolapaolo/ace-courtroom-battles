import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const yesBtn = page.locator("dialog.spoiler-dialog").locator("button.spoiler-dialog-yes-btn")
    await yesBtn.click()
    await page.goto('/characters');
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

test('Should show page title', async ({ page }) => {

    const pageTitle = page.locator('h3');

    await expect(pageTitle).toContainText('Meet the Attorneys and Prosecutors');
})

test('Should show a large character image with a badge image and the name of the character', async ({ page }) => {
    const largeImg = page.locator('img.character-img-lg');
    const badgeImg = page.locator('img.character-badge');
    const characterTitle = page.locator('h2.character-title');

    await expect(largeImg).toBeVisible();
    await expect(largeImg).toHaveAttribute('src', '/characters/phoenix-lg-select.webp')
    await expect(badgeImg).toBeVisible();
    await expect(badgeImg).toHaveAttribute('src', '/badges/attorney-badge.webp')
    await expect(characterTitle).toBeVisible();

    await expect(characterTitle).toContainText('Phoenix Wright');
})

test('Should show 14 characters links', async ({ page }) => {
    const characterLinks = page.locator('a.character-link');

    // 14 links for large screens and the other 14 for small screens
    await expect(characterLinks).toHaveCount(28);

    let visibleLinksCount = 0
    for (let i = 0; i < 28; i++) {
        if (await characterLinks.nth(i).isVisible()) visibleLinksCount++
    }

    expect(visibleLinksCount).toBe(14)

})

test('Should change big img when hovering on a character', async ({ page }) => {
    const largeImg = page.locator('img.character-img-lg');
    const badgeImg = page.locator('img.character-badge');
    const characterTitle = page.locator('h2.character-title');

    const characterLinks = page.locator('a.character-link');

    await expect(largeImg).toBeVisible();
    await expect(largeImg).toHaveAttribute('src', '/characters/phoenix-lg-select.webp')
    await expect(badgeImg).toBeVisible();
    await expect(badgeImg).toHaveAttribute('src', '/badges/attorney-badge.webp')
    await expect(characterTitle).toBeVisible();
    await expect(characterTitle).toContainText('Phoenix Wright');

    await characterLinks.nth(1).hover()
    await expect(largeImg).toHaveAttribute('src', '/characters/miles-lg-select.webp')
    await expect(badgeImg).toHaveAttribute('src', '/badges/prosecutor-badge.webp')
    await expect(characterTitle).toContainText('Miles Edgeworth');

})

test('Should navigate to character page when a character link is clicked', async ({ page }) => {
    const characterLinks = page.locator('a.character-link');

    await characterLinks.nth(1).click()

    await expect(page).toHaveURL('/characters/1')
})