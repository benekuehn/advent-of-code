import styleXPlugin from '@stylexjs/babel-plugin';

const { code, map, metadata } = await babel.transformAsync(inputCode, {
  presets,
  plugins: [
    ...plugins,
    [styleXPlugin, {
      // Required. File path for the generated CSS file.
      stylexSheetName: './.build/stylex.css',
      // default: false
      dev: false,
      // prefix for all generated classNames
      classNamePrefix: 'x',
      // Required for CSS variable support
      unstable_moduleResolution: {
        // type: 'commonJS' | 'haste'
        // default: 'commonJS'
        type: 'commonJS',
        // The absolute path to the root directory of your project
        rootDir: __dirname,
      },
    }],
  ],
});

const collectedCSS = styleXPlugin.processStylexRules(metadata.stylex);