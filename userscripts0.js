/* Start spoofViewport.js */
// Enables 4K resolution tricking youtube into thinking that we are on a 4K TV
(function () {
  //if (window.screen.width >= 3840 || window.screen.height >= 2160) return;

  var existing = document.querySelector('meta[name="viewport"]');
  if (existing) {
    existing.setAttribute(
      "content",
      "width=3840, height=2160, initial-scale=1.0"
    );
  } else {
    var meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=3840, height=2160, initial-scale=1.0";
    document.head.appendChild(meta);
  }
})();

(function () {
  const observer = new MutationObserver((mutations, obs) => {
    const exitButton = document.querySelector(
      ".ytVirtualListItemLast ytlr-button.ytLrButtonLargeShape"
    );

    if (exitButton) {
      exitButton.addEventListener(
        "keydown",
        (e) => {
          if (
            (e.key === "Enter" || e.keyCode === 13) &&
            typeof ExitBridge !== "undefined" &&
            ExitBridge.onExitCalled
          ) {
            e.preventDefault();
            e.stopPropagation();
            ExitBridge.onExitCalled();
          }
        },
        true
      );
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
/* End exitBridge.js */

/* Start TizenTubeScripts.js */
(function () {
  "use strict";

  const CONFIG_KEY = "ytaf-configuration";
  const defaultConfig = {
    enableAdBlock: true,
    enableSponsorBlock: true,
    sponsorBlockManualSkips: [],
    enableSponsorBlockSponsor: true,
    enableSponsorBlockIntro: true,
    enableSponsorBlockOutro: true,
    enableSponsorBlockInteraction: true,
    enableSponsorBlockSelfPromo: true,
    enableSponsorBlockMusicOfftopic: true,
    enableShorts: true,
  };

  let localConfig;

  try {
    localConfig = JSON.parse(window.localStorage[CONFIG_KEY]);
  } catch (err) {
    //console.warn('Config read failed:', err);
    localConfig = defaultConfig;
  }

  window.localConfig = window.localStorage[CONFIG_KEY]
    ? JSON.parse(window.localStorage[CONFIG_KEY])
    : defaultConfig;

  window.configRead = function (key) {
    if (window.localConfig[key] === undefined) {
      window.localConfig[key] = defaultConfig[key];
    }
    return window.localConfig[key];
  };

  window.configWrite = function (key, value) {
    window.localConfig[key] = value;
    window.localStorage[CONFIG_KEY] = JSON.stringify(window.localConfig);
  };

  function showToast(title, subtitle, thumbnails) {
    const toastCmd = {
      openPopupAction: {
        popupType: "TOAST",
        popup: {
          overlayToastRenderer: {
            title: {
              simpleText: title,
            },
            subtitle: {
              simpleText: subtitle,
            },
          },
        },
      },
    };
    resolveCommand(toastCmd);
  }

