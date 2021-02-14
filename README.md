# jupyterlab-theme-hale

![Github Actions Status](https://github.com/nimbous/jupyterlab-theme-hale/workflows/Build/badge.svg)
![License](https://img.shields.io/github/license/nimbous/jupyterlab-theme-hale.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/nimbous/jupyterlab-theme-hale)
![GitHub stars](https://img.shields.io/github/stars/nimbous/jupyterlab-theme-hale)
[![NPM Version](https://img.shields.io/npm/v/jupyterlab-theme-hale.svg)](https://npmjs.org/package/jupyterlab-theme-hale)
![Monthly Downloads](https://img.shields.io/npm/dm/jupyterlab-theme-hale.svg?label=npm%20downloads)
[![PyPI](https://img.shields.io/pypi/v/jupyterlab_theme_hale)](https://pypi.org/project/jupyterlab-theme-hale/)
![PyPI - Downloads](https://img.shields.io/pypi/dm/jupyterlab_theme_hale?label=pypi%20downloads)

Hale is a theme extension for JupyterLab 3. If you are using Jupyter Lab 2, you can instead take a look at Hale's sister extension [Jupyter Calm Theme](https://github.com/nimbous/jupyter-calm-theme). Both themes are inspired by Night Owl Theme. 


## Screenshot

![Screenshot of the theme](https://user-images.githubusercontent.com/33524244/93402162-e2ebee00-f87b-11ea-8a11-3c49d21803d2.png)

## Prerequisites

* JupyterLab

## Version

* `v0.1.3`
    * Set `Hack` font-type as default, remove `Menlo` font-type for a more consistent look.
* `v0.1.2`
    * `Hack` font-type added.
* `v0.1.1`
    * Initial version. This version is compatible with JupyterLab 3. 

## Requirements

* JupyterLab >= 3.0

## Install

To install it as a prebuilt extension (requires JupyterLab >= 3.0):

```bash
pip install jupyterlab_theme_hale
```

Or install it as a source extension:

```bash
jupyter labextension install jupyterlab-theme-hale
```

Apply theme by checking `Settings -> Jupyterlab Theme -> Jupyterlab Hale`

To enable theme scrollbars, in JupyterLab, either

- navigate to `Settings -> Advanced Settings Editor -> Theme`, and add `"theme-scrollbars": true` to `User Preferences` or
- check `Settings -> Jupyterlab Theme -> Theme Scrollbars`

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

Clone the repo to your local environment. Change directory to the `jupyterlab_theme_hale` directory. Install package in `development` mode:

```bash
pip install -e .
```

Link your development version of the extension with JupyterLab:
```bash
jupyter labextension develop . --overwrite
```

Rebuild extension Typescript source after making changes:
```bash
jlpm run build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension. Watch the source directory in one terminal, automatically rebuilding when needed:
```bash
jlpm run watch
```

Run JupyterLab in another terminal:
```bash
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm run build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Uninstall

```bash
pip uninstall jupyterlab_theme_hale
```

or

```bash
jupyter labextension uninstall jupyterlab-theme-hale
```
