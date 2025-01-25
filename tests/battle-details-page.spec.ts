import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const yesBtn = page.locator("dialog.spoiler-dialog").locator("button.spoiler-dialog-yes-btn")
    await yesBtn.click()
    await page.goto('/battles/phoenix-vs-miles');
})

/*

*/

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

test('Should show 2 characters imgs and a versus text', async ({ page }) => {
    const picturesContainer = page.locator('div.pictures-container');
    const charactersImgs = picturesContainer.locator('img');
    const versusText = page.locator('h3.versus-text');

    expect(await charactersImgs.count()).toBe(2);
    await expect(versusText).toBeVisible();
})

test('Should show a background img', async ({ page }) => {
    const backgroundImg = page.locator('#battles-courtroom-bg');

    await expect(backgroundImg).toBeVisible();
})

test('Should show a sound toggler', async ({ page }) => {
    const soundToggler = page.locator('#sound-toggler');
    const soundOnIcon = page.locator('#sound-on-icon');

    await expect(soundToggler).toBeVisible();
    await expect(soundOnIcon).toBeVisible();
})

test('Should play the courtroom theme when toggling the sound and stop it when toggling it again', async ({ page }) => {
    const soundToggler = page.locator('#sound-toggler');
    const soundOnIcon = page.locator('#sound-on-icon');
    const soundOffIcon = page.locator('#sound-off-icon');

    const isSoundOnIconVisible = await soundOnIcon.evaluate(el => el.style.opacity === '1');

    if (isSoundOnIconVisible) {
        const audioIsPlaying = await page.evaluate(() => {
            const audio = document.getElementById('courtroom-theme') as HTMLAudioElement;
            return audio && !audio.paused;
        })
    
        await expect(soundOnIcon).toHaveCSS("opacity", "1");
        await expect(soundOffIcon).toHaveCSS("opacity", "0");
        await expect(audioIsPlaying).toBe(true);

        await soundToggler.click();

        const audioIsPaused = await page.evaluate(() => {
            const audio = document.getElementById('courtroom-theme') as HTMLAudioElement;
            return audio && audio.paused;
        })
        
        await expect(audioIsPaused).toBe(true);
        await expect(soundOnIcon).toHaveCSS("opacity", "0");
        await expect(soundOffIcon).toHaveCSS("opacity", "1");
    } else {
        const audioIsPaused = await page.evaluate(() => {
            const audio = document.getElementById('courtroom-theme') as HTMLAudioElement;
            return audio && audio.paused;
        })
        
        await expect(audioIsPaused).toBe(true);
        await expect(soundOnIcon).toHaveCSS("opacity", "0");
        await expect(soundOffIcon).toHaveCSS("opacity", "1");

        await soundToggler.click();

        const audioIsPlaying = await page.evaluate(() => {
            const audio = document.getElementById('courtroom-theme') as HTMLAudioElement;
            return audio && !audio.paused;
        })
    
        await expect(audioIsPlaying).toBe(true);
        await expect(soundOnIcon).toHaveCSS("opacity", "1");
        await expect(soundOffIcon).toHaveCSS("opacity", "0");
    }
})

test('Should show the date and location of the battle', async ({ page }) => {
    const typedTextContainer = page.locator('p.typed-text');
    const typedTextSpans = typedTextContainer.locator('span');

    const dateSpan = typedTextSpans.nth(0);
    const courtroomNameSpan = typedTextSpans.nth(1);
    const roomSpan = typedTextSpans.nth(2);
    const gameSpan = typedTextSpans.nth(3);

    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'long' });
    const time = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });

    
    await expect(dateSpan).toBeVisible();
    await expect(dateSpan).toContainText(`${month} ${day} - ${time}`);
    await expect(courtroomNameSpan).toBeVisible();
    await expect(roomSpan).toBeVisible();
    await expect(gameSpan).toBeVisible();
})

test('Should show the case details', async ({ page }) => {
    const caseDetailsContainer = page.locator('section.case-details-container');
    const caseDetailsTitle = caseDetailsContainer.locator('h3');
    const caseDetails = caseDetailsContainer.locator('article.case-section').locator('div');

    const caseName = caseDetails.nth(0);
    const incidentType = caseDetails.nth(1);
    const victim = caseDetails.nth(2);
    const cause = caseDetails.nth(3);

    await expect(caseDetailsTitle).toBeVisible();

    await expect(caseName.locator('p')).toHaveText('Case Name:');
    await expect(incidentType.locator('p')).toHaveText('Incident Type:');
    await expect(victim.locator('p')).toHaveText('Victim:');
    await expect(cause.locator('p')).toHaveText('Cause:');
    
    await expect(caseName.locator('h4')).toBeVisible();
    await expect(incidentType.locator('h4')).toBeVisible();
    await expect(victim.locator('h4')).toBeVisible();
    await expect(cause.locator('h4')).toBeVisible();

})

test('Should show a conversation between the characters', async ({ page }) => {
    const prosecutorSentence = page.locator('#prosecutor-sentence');
    const attorneySentence = page.locator('#attorney-sentence');
    const nextQuoteBtn = page.locator('#next-quote-btn');
    const prosecutorSprite = page.locator('#prosecutor-sprite');
    const attorneySprite = page.locator('#attorney-sprite');

    await expect(prosecutorSentence).toBeVisible();
    await expect(attorneySentence).toBeVisible();
    await expect(nextQuoteBtn).toBeVisible();
    await expect(prosecutorSprite).toBeVisible();
    await expect(attorneySprite).toBeVisible();
})

test('Should show a character talking when clicking on the button between them', async ({ page }) => {
    const prosecutorSentence = page.locator('#prosecutor-sentence');
    const attorneySentence = page.locator('#attorney-sentence');
    const nextQuoteBtn = page.locator('#next-quote-btn');

    await expect(attorneySentence).toHaveText('...');
    await expect(prosecutorSentence).not.toHaveText('...');

    await nextQuoteBtn.click();

    await expect(prosecutorSentence).toHaveText('...');
    await expect(attorneySentence).not.toHaveText('...');

    await nextQuoteBtn.click();

    await expect(attorneySentence).toHaveText('...');
    await expect(prosecutorSentence).not.toHaveText('...');
})

test('Should show the video of the battle', async ({ page }) => {
    const trialVideosContainer = page.locator('section.trial-videos-container');
    const trialVideosTitle = trialVideosContainer.locator('h3');
    const trialVideosDescription = trialVideosContainer.locator('h3 + p');

    const videoContainer = trialVideosContainer.locator('div.video-container');
    const firstVideo = videoContainer.nth(0);
    const videoThumb = firstVideo.locator('img.video-thumb');
    const videoPlayBtn = firstVideo.locator('button.play-video-btn');

    await expect(trialVideosTitle).toBeVisible();
    await expect(trialVideosDescription).toBeVisible();
    await expect(firstVideo).toBeVisible();
    await expect(videoThumb).toBeVisible();
    await expect(videoPlayBtn).toBeVisible();
})

test('Should play the video when clicking on the play button', async ({ page }) => {
    const trialVideosContainer = page.locator('section.trial-videos-container');

    const videoContainer = trialVideosContainer.locator('div.video-container');
    const firstVideo = videoContainer.nth(0);
    const videoThumb = firstVideo.locator('img.video-thumb');
    const videoPlayBtn = firstVideo.locator('button.play-video-btn');

    await videoPlayBtn.click();

    const trialIframe = videoContainer.locator('iframe');

    await expect(videoThumb).not.toBeVisible();
    await expect(videoPlayBtn).not.toBeVisible();
    await expect(trialIframe).toBeVisible();
})