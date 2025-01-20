import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('/');
})


test('Should show spoiler warning with 2 buttons', async ({ page }) => {

    const spoilerDialog = page.locator("dialog.spoiler-dialog")
    const yesBtn = spoilerDialog.locator("button.spoiler-dialog-yes-btn")
    const noBtn = spoilerDialog.locator("button.spoiler-dialog-no-btn")

    await expect(spoilerDialog).toBeVisible()
    await expect(yesBtn).toBeVisible()
    await expect(noBtn).toBeVisible()
});

test('Shouldn\'t show the spoiler warning after clicking on the yes button', async ({ page }) => {

    const spoilerDialog = page.locator("dialog.spoiler-dialog")
    const yesBtn = spoilerDialog.locator("button.spoiler-dialog-yes-btn")

    await yesBtn.click()
    await expect(spoilerDialog).not.toBeVisible()
})

test('Should show a go to top button when scrolling down', async ({ page }) => {

    const spoilerDialog = page.locator("dialog.spoiler-dialog")
    const yesBtn = spoilerDialog.locator("button.spoiler-dialog-yes-btn")

    await yesBtn.click()

    const topBtn = page.locator("#go-to-top-btn")

    await expect(topBtn).toBeVisible()
    await expect(topBtn).toHaveCSS("opacity", "0")

    await page.evaluate(() => {
        document.body.scrollTop = 10000;
    });
      
    await expect(topBtn).toHaveCSS("opacity", "1")
})

test('Should go to top when clicking on go to top button', async ({ page }) => {

    const spoilerDialog = page.locator("dialog.spoiler-dialog")
    const yesBtn = spoilerDialog.locator("button.spoiler-dialog-yes-btn")
    await yesBtn.click()

    const topBtn = page.locator("#go-to-top-btn")

    await expect(topBtn).toBeVisible()
    await expect(topBtn).toHaveCSS("opacity", "0")

    await page.evaluate(() => {
        document.body.scrollTop = 10000;
    })
    await expect(topBtn).toHaveCSS("opacity", "1")

    await topBtn.click()

    await expect(topBtn).toHaveCSS("opacity", "0")

    const scrollTop = await page.evaluate(() => document.body.scrollTop);
    expect(scrollTop).toBe(0);

})

test('Should show logo, location text and button to enter, info about app and footer', async ({ page }) => {
    const spoilerDialog = page.locator("dialog.spoiler-dialog")
    const yesBtn = spoilerDialog.locator("button.spoiler-dialog-yes-btn")
    await yesBtn.click()

    const logo = page.locator('[alt="Ace Logo"]');
    const locationText = page.locator('p.date-typing');
    const enterButton = page.locator('#enter-courtroom');
    const infoText = page.locator('.home-info-container');
    const footer = page.locator('footer');

    await expect(logo).toBeVisible();
    await expect(locationText).toBeVisible();
    await expect(enterButton).toBeVisible();
    await expect(infoText).toBeVisible();
    await expect(footer).toBeVisible();

    const githubLink = footer.locator('a')
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/jigcolapaolo/ace-courtroom-battles')


})

test('Should navigate to characters page when enter button is clicked', async ({ page }) => {
    const spoilerDialog = page.locator("dialog.spoiler-dialog")
    const yesBtn = spoilerDialog.locator("button.spoiler-dialog-yes-btn")
    await yesBtn.click()

    const enterButton = page.locator('#enter-courtroom');
    await enterButton.click()
    await page.evaluate(() => {
        const hammerSound = document.getElementById("hammer-sound") as HTMLAudioElement;
        hammerSound.dispatchEvent(new Event('ended'));
    });
    
    await expect(page).toHaveURL('/characters')
})
