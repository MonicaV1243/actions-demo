import { test, expect } from '@mobilewright/test';

test.use({ autoAppLaunch: false, deviceName: /.*/ });

test.afterEach(async ({ device }) => {
  // @step#0v8uwk Clean up browser state after test
  await device.terminateApp('com.apple.mobilesafari').catch(() => {});
});

test('Verify the home page loads successfully', async ({ screen, device }) => {
  // @step#jlpplr Configure timeout for device setup and navigation
  test.setTimeout(140000);

  // @step#97bxxy Navigate to https://practicesoftwaretesting.com/
  await device.terminateApp('com.apple.mobilesafari').catch(() => {});
  await device.clearAppData('com.apple.mobilesafari');
  await device.launchApp('com.apple.mobilesafari');
  await device.openUrl('https://practicesoftwaretesting.com/');

  // @step#o64mct Wait for the home page to load
  await expect(screen.getByText('Practice Software Testing - Toolshop').first()).toBeVisible({ timeout: 30_000 });

  // @step#4mpz2x Verify home page displays shop interface content
  await expect(screen.getByText('Combination Pliers').first()).toBeVisible();
});
