# Initializing HackMotion Theme on WordPress

To initialize the HackMotion theme on your WordPress site, follow these steps:

## Step 1: Setup the HackMotion Theme

1. Move the folder `HackMotion` to the `wp-content/themes` directory of your WordPress installation.
2. In your WordPress admin dashboard, navigate to `Appearance` > `Themes`.
3. Locate the HackMotion theme and click `Activate` to apply it to your site.

## Step 2: Install the Bige File Upload Extension

The HackMotion theme requires the Bige File Upload extension for full functionality. Follow these steps to install it:

1. In your WordPress admin dashboard, navigate to `Plugins` > `Add New`.
2. In the search bar, type `Bige File Upload`.
3. Locate the Bige File Upload plugin and click `Install Now`.
4. Once the installation is complete, click `Activate` to activate the plugin.

## Step 3: Upload all the files at the same time to media library in WordPress

1. In your WordPress admin dashboard, navigate to `Media` > `Add New`.
2. Click `Select Files` and choose all the files from HackMotion/HackMotion/src/assets both images and a single video.

## Step 4: Update the index.js file

1. Copy links for all of the uploaded files.
2. Open the `index.js` file located in the `HackMotion/js` directory.
3. Search for the .img and .mp4 files and replace the existing links with the new links you copied in the previous step.
4. Save the changes to the `index.js` file.
