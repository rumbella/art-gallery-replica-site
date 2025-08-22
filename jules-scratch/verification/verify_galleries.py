from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Go to the home page
    page.goto("http://localhost:8080")

    # Click on the sculpture link
    page.get_by_role("link", name="SCULPTURE").click()
    page.wait_for_timeout(1000)
    expect(page).to_have_url("http://localhost:8080/sculpture")
    page.wait_for_selector(".masonry-grid-item")
    page.screenshot(path="jules-scratch/verification/sculpture-page.png")

    # Click on an image to open the dialog
    page.query_selector(".masonry-grid-item img").click()
    expect(page.locator(".max-h-\\[90vh\\]")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/sculpture-dialog.png")

    # Close the dialog
    page.keyboard.press("Escape")

    # Go back to the home page
    page.get_by_role("link", name="BACK").click()
    expect(page).to_have_url("http://localhost:8080/")

    # Click on the painting link
    page.get_by_role("link", name="PAINTING").click()
    page.wait_for_timeout(1000)
    expect(page).to_have_url("http://localhost:8080/painting")
    page.wait_for_selector(".masonry-grid-item")
    page.screenshot(path="jules-scratch/verification/painting-page.png")

    # Click on an image to open the dialog
    page.query_selector(".masonry-grid-item img").click()
    expect(page.locator(".max-h-\\[90vh\\]")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/painting-dialog.png")

    # Close the dialog
    page.keyboard.press("Escape")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
