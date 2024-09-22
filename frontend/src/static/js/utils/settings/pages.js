let PAGES = null;

export function init(settings) {
  PAGES = {
    latest: {
      enabled: false,
      title: 'بلاوکراوەی نوێ',
    },
    featured: {
      enabled: false,
      title: 'تایبەتمەند',
    },
    recommended: {
      enabled: false,
      title: 'پێشنیارکراو',
    },
    members: {
      enabled: false,
      title: 'Members',
    },
    liked: {
      enabled: false,
      title: 'میدیای دلخوازراو',
    },
    history: {
      enabled: false,
      title: 'مێژوو',
    },
  };

  if (void 0 !== settings) {
    for (let k in PAGES) {
      if (void 0 !== settings[k]) {
        PAGES[k].enabled = true;

        if (void 0 !== settings[k].enabled && false === settings[k].enabled) {
          PAGES[k].enabled = false;
        }

        if ('string' === typeof settings[k].title) {
          PAGES[k].title = settings[k].title.trim();
        }
      }
    }
  }
}

export function settings() {
  return PAGES;
}
