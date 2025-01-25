import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const yesBtn = page.locator("dialog.spoiler-dialog").locator("button.spoiler-dialog-yes-btn")
    await yesBtn.click()
    await page.goto('/rankings');
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
    const pageTitle = page.locator('h3:text("Character Rankings")');
    const pageDescription = page.locator('h3:text("Character Rankings") + p');

    await expect(pageTitle).toBeVisible();
    await expect(pageDescription).toContainText('Explore character rankings with like and dislike percentages. Vote for your favorite!');
})

test('Should show at least 2 characters links', async ({ page }) => {
    const linksContainer = page.locator('article');
    const characterLinks = linksContainer.locator('a');

    const visibleLinksCount = await characterLinks.count();
    expect(visibleLinksCount).toBeGreaterThanOrEqual(2)
})

test('Should show vote percentages and total rankings for a character', async ({ page }) => {
    const linksContainer = page.locator('article');
    const charactersData = linksContainer.locator('div.character-data');


    const firstCharacterData = charactersData.nth(0);
    const characterTotalRanking = firstCharacterData.locator('p.total-rankings');
    const percentageBar = firstCharacterData.locator('div.percentage-bar');
    const likesPercentage = percentageBar.locator('div.likes');
    const dislikesPercentage = percentageBar.locator('div.dislikes');

    await expect(percentageBar).toBeVisible();


    const likesPercentageIsVisible = await likesPercentage.isVisible();
    const dislikesPercentageIsVisible = await dislikesPercentage.isVisible();

    expect(likesPercentageIsVisible || dislikesPercentageIsVisible).toBe(true);
    await expect(characterTotalRanking).toBeVisible();
})

test('Should navigate to character page when a character link is clicked', async ({ page }) => {
    const linksContainer = page.locator('article');
    const characterLinks = linksContainer.locator('a');

    await characterLinks.nth(1).click()

    await expect(page).toHaveURL(/\/characters\/\d{1,2}$/);

})