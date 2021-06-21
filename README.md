# Assignment Tracker++

A minor modification of the chrome plugin [assignment-tracker](https://chrome.google.com/webstore/detail/assignment-tracker/majicckffndkgmkcdbgccohoclphnkhg) by [Catherine Zeng](https://github.com/yczeng), as well as a port of the modification to firefox.

Tested on firefox 78.10.0esr and 89.0.1 as well as chromium 90.0.4430.212 (dev build) in Debian 11.

## Installation

You can now get v1.0.4 on the [chrome web store](https://chrome.google.com/webstore/detail/assignment-tracker%20%20/cegfpcfgmbllgbbcibconieggaojdgfl?hl=en&authuser=0) and [firefox addon repository](https://addons.mozilla.org/en-US/firefox/addon/assignment-tracker/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)! 
Alternatively, to install directly from this repo, do the following:

### Chrome
* clone or download the `./chrome` directory.
* follow [these instructions](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/) to install unpacked from `./chrome`.

### Firefox
* enable [unsigned addons](https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox?as=u&utm_source=inproduct) in firefox. 
* download the most recent release `assigmnemnt_tracker++_$VER_firefox.xpi`.
* navigate to `about:addons`, select from the cog-wheel dialong the option "install addon from file," and select `assigmnemnt_tracker++_$VER_firefox.xpi`.

## Current state:

Foreground color, background color, and header text are able to be configured in `chrome://extensions` within chrome and `about:addons` within firefox.

## Todo:

* Greater customization options (text size, margins, etc).
* Update manifest to v3
