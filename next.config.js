const StylexPlugin = require("@stylexjs/webpack-plugin");
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (
        config,
      ) => {
        config.plugins = config.plugins || [];
        config.plugins.push(new StylexPlugin({
            // filename: 'styles.css',
            // get webpack mode and set value for dev
            dev: config.mode === 'development',
            // Required for CSS variable support
            appendTo: (name) => name.endsWith('.css'),
            filename: path.join(__dirname, 'app', 'stylex-bundle.css'),
            unstable_moduleResolution:
                {
                    // The module system to be used.
                    // Use this value when using `ESModules`.
                    type: 'commonJS',
                    // The absolute path to the root directory of your project.
                    rootDir: __dirname,
                },
            }));

        return config;
      },
}

module.exports = nextConfig
