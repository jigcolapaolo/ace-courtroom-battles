import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const yesBtn = page.locator("dialog.spoiler-dialog").locator("button.spoiler-dialog-yes-btn")
    await yesBtn.click()
    await page.goto('/characters/1');
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

test(`Should show character details (
        alias,
        birth year,
        debut episode,
        type img and name,
        hair color,
        eye color,
        height,
        musical theme,
        objection img,
        character img and name
    )`, async ({ page }) => {
        const aliasTitle = page.locator('div.alias-container').locator('p');
        const characterAlias = page.locator('div.alias-container').locator('span');

        const birthYearTitle = page.locator('div.birthyear-container').locator('p');
        const characterBirthYear = page.locator('div.birthyear-container').locator('span');

        const debutEpisodeTitle = page.locator('div.debut-episode-container').locator('p');
        const characterDebutEpisode = page.locator('div.debut-episode-container').locator('span');

        const typeTitle = page.locator('div.type-container').locator('p');
        const typeImg = page.locator('div.type-container').locator('img.character-badge');
        const characterType = page.locator('div.type-container').locator('span');

        const hairColorTitle = page.locator('div.hair-color-container').locator('p');
        const characterHairColor = page.locator('div.hair-color-container').locator('span');

        const eyeColorTitle = page.locator('div.eye-color-container').locator('p');
        const characterEyeColor = page.locator('div.eye-color-container').locator('span');

        const heightTitle = page.locator('div.height-container').locator('p');
        const characterHeight = page.locator('div.height-container').locator('span');

        const musicalThemeTitle = page.locator('div.musical-theme-container');
        const musicalThemeLink = page.locator('div.musical-theme-container').locator('a');

        const objectionImg = page.locator('div.objection-container').locator('img');

        const characterImgContainer = page.locator('picture.img-container').locator('img');
        const characterName = page.locator('h1.character-name');

        await expect(aliasTitle).toContainText('Alias');
        await expect(characterAlias).toContainText('Edgey, Conviction Machine');

        await expect(birthYearTitle).toContainText('Birth Year');
        await expect(characterBirthYear).toContainText('1992');

        await expect(debutEpisodeTitle).toContainText('Debut Episode');
        await expect(characterDebutEpisode).toContainText('Turnabout Sisters');

        await expect(typeTitle).toContainText('Type');
        await expect(typeImg).toHaveAttribute('src', '/badges/prosecutor-badge.webp');
        await expect(characterType).toContainText('Prosecutor');

        await expect(hairColorTitle).toContainText('Hair Color');
        await expect(characterHairColor).toContainText('Dark Gray');

        await expect(eyeColorTitle).toContainText('Eye Color');
        await expect(characterEyeColor).toContainText('Gray');

        await expect(heightTitle).toContainText('Height');
        await expect(characterHeight).toContainText(`5'10"; 178 cm`);

        await expect(musicalThemeTitle).toContainText('Musical Theme');
        await expect(musicalThemeLink).toContainText('Great Revival ~ Miles Edgeworth');
        await expect(musicalThemeLink).toHaveAttribute('href', 'https://www.youtube.com/watch?v=QI55FRv28Kw');

        await expect(characterImgContainer).toHaveAttribute('src', '/characters/miles-lg-select.webp');
        await expect(characterName).toContainText('Miles Edgeworth');
        await expect(objectionImg).toHaveAttribute('src', '/objection.webp');

    })

    test('Should reproduce objection sound when clicking on objection img', async ({ page }) => {
        const objectionImg = page.locator('div.objection-container').locator('img');

        await objectionImg.click()

        const isAudioPlaying = async () => {
            return await page.evaluate(() => {
                const audioElement = document.querySelector(`#objection-sound`) as HTMLAudioElement;
                return audioElement && !audioElement.paused;
            });
        };
    
        expect(await isAudioPlaying()).toBe(true);
    })

    test('Should show character quotes', async ({ page }) => {
        const quotesContainer = page.locator('#quotes-container');

        await expect(quotesContainer).toHaveText("You're not a clown; you're the entire circus.")
    })

    test('Should change quotes when clicking on the next or previous button', async ({ page }) => {
        const quotesContainer = page.locator('#quotes-container');
        const nextButton = page.locator('#next-quote-btn');
        const previousButton = page.locator('#prev-quote-btn');

        await expect(quotesContainer).toHaveText("You're not a clown; you're the entire circus.")

        await nextButton.isVisible()
        await nextButton.click()
        await expect(quotesContainer).toHaveText("Just sit back, relax... and enjoy the sound of the noose tightening around your own neck.")
        
        await previousButton.isVisible()
        await previousButton.click()
        await expect(quotesContainer).toHaveText("You're not a clown; you're the entire circus.")
    })

    test('Should show login section if user is not logged in', async ({ page }) => {
        const loginBtn = page.locator('div.login-container').locator('button');
        const loginSmText = page.locator('div.login-container').locator('small');

        await expect(loginBtn).toContainText('LOGIN');
        await expect(loginSmText).toContainText('To like or dislike, you must login with a Google account');
    })

    test('Should show logging in if user clicks on login button', async ({ page }) => {
        const loginBtn = page.locator('div.login-container').locator('button');

        await expect(loginBtn).toContainText('LOGIN');

        await loginBtn.isVisible()
        await loginBtn.click()

        await expect(loginBtn).toContainText('Logging in...');
    })