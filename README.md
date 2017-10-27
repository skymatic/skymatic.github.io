# Custom Bootstrap 4 site on GitHub Pages

This is a template for GitHub Pages based on Bootstrap 4. All Sass files are included and can be customized. Sass will be processed by GitHub Pages. Javascript needed by Bootstrap will be loaded from external CDNs and can not be modified.

## Customizing Bootstrap

All the [Bootstrap sass files](https://github.com/twbs/bootstrap/tree/v4.0.0-beta/scss) are copied to `_sass`. Customize variables in `_sass/custom.scss` and enable features in `_sass/boostrap.scss`.

## Installation

### macOS

We need to update ruby and optionally install the Xcode Command Line Tools. Assuming you have [Homebrew](https://brew.sh/) installed.

```
brew install ruby
xcode-select --install
```

Now restart your Terminal (as environment variables might have changed with the new Ruby version), then install the bundler ruby gem:

```
gem install bundler
```

Change to the directory where you cloned (or unzipped or whatever) this repo and execute

```
bundle install
```

## License

Licensed under the MIT license.
