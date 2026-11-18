import { defineConfig } from 'mobilewright';

export default defineConfig({
  platform: 'ios',
  bundleId: 'com.mobilenext.devicekit-iosUITests.xctrunner',
  deviceName: /iPad/,
  testDir: './tests',
  timeout: 140_000,
});
