/* =========================================================
   EVERMINT OS
   ========================================================= */


/* =========================================================
   GAME DATABASE

   The final launch paths should be adjusted after checking
   the exact folder structure of the web-port fork.
   ========================================================= */

const GAMES = [

  {
    id: "amanda-the-adventurer",
    name: "Amanda the Adventurer",
    category: "Horror",
    icon: "👧",
    featured: true
  },

  {
    id: "andys-apple-farm",
    name: "Andy's Apple Farm",
    category: "Indie",
    icon: "🍎",
    featured: true
  },

  {
    id: "baldi-plus",
    name: "Baldi's Basics Plus",
    category: "Horror",
    icon: "📚",
    featured: true
  },

  {
    id: "baldi-remaster",
    name: "Baldi's Basics Classic Remastered",
    category: "Horror",
    icon: "🏫",
    featured: false
  },

  {
    id: "bendy",
    name: "Bendy and the Ink Machine",
    category: "Horror",
    icon: "🖋️",
    featured: true
  },

  {
    id: "bergentruck",
    name: "BERGENTRUCK 201x",
    category: "Driving",
    icon: "🚗",
    featured: false
  },

  {
    id: "bloodmoney",
    name: "BLOODMONEY!",
    category: "Indie",
    icon: "💵",
    featured: false
  },

  {
    id: "buckshot-roulette",
    name: "Buckshot Roulette",
    category: "Indie",
    icon: "🎰",
    featured: false
  },

  {
    id: "class-of-09",
    name: "Class of '09",
    category: "Story",
    icon: "📓",
    featured: false
  },

  {
    id: "cuphead",
    name: "Cuphead",
    category: "Platformer",
    icon: "☕",
    featured: true
  },

  {
    id: "dead-plate",
    name: "Dead Plate",
    category: "Story",
    icon: "🍽️",
    featured: false
  },

  {
    id: "deltatraveler",
    name: "Deltatraveler",
    category: "RPG",
    icon: "⭐",
    featured: true
  },

  {
    id: "donottakethiscathome",
    name: "Do NOT Take This Cat Home",
    category: "Indie",
    icon: "🐈",
    featured: false
  },

  {
    id: "getting-over-it",
    name: "Getting Over It",
    category: "Challenge",
    icon: "🪨",
    featured: true
  },

  {
    id: "happy-sheepies",
    name: "Happy Sheepies",
    category: "Indie",
    icon: "🐑",
    featured: false
  },

  {
    id: "hotline-miami",
    name: "Hotline Miami",
    category: "Action",
    icon: "🌴",
    featured: false
  },

  {
    id: "jelly-drift",
    name: "Jelly Drift",
    category: "Racing",
    icon: "🏎️",
    featured: false
  },

  {
    id: "karlson",
    name: "Karlson",
    category: "Action",
    icon: "🥛",
    featured: false
  },

  {
    id: "kindergarten",
    name: "Kindergarten",
    category: "Story",
    icon: "🎒",
    featured: false
  },

  {
    id: "minesweeperplus",
    name: "Minesweeper Plus",
    category: "Puzzle",
    icon: "💣",
    featured: false
  },

  {
    id: "omori-fixed",
    name: "OMORI",
    category: "RPG",
    icon: "🌻",
    featured: true
  },

  {
    id: "people-playground",
    name: "People Playground",
    category: "Sandbox",
    icon: "🧪",
    featured: false
  },

  {
    id: "pizza-tower",
    name: "Pizza Tower",
    category: "Platformer",
    icon: "🍕",
    featured: true
  },

  {
    id: "raft",
    name: "RAFT",
    category: "Survival",
    icon: "🛶",
    featured: false
  },

  {
    id: "schoolboy-runaway",
    name: "Schoolboy Runaway",
    category: "Indie",
    icon: "🎒",
    featured: false
  },

  {
    id: "slender",
    name: "Slender: The Eight Pages",
    category: "Horror",
    icon: "🌲",
    featured: false
  },

  {
    id: "sonic.exe",
    name: "Sonic.exe",
    category: "Horror",
    icon: "💨",
    featured: false
  },

  {
    id: "speed-stars",
    name: "Speed Stars",
    category: "Sports",
    icon: "🏃",
    featured: true
  },

  {
    id: "tattletail",
    name: "Tattletail",
    category: "Horror",
    icon: "🤖",
    featured: false
  },

  {
    id: "thats-not-my-neighbor",
    name: "That's Not My Neighbor",
    category: "Puzzle",
    icon: "🚪",
    featured: true
  },

  {
    id: "the-man-in-the-window",
    name: "The Man in the Window",
    category: "Horror",
    icon: "🪟",
    featured: false
  },

  {
    id: "ultrakill",
    name: "ULTRAKILL",
    category: "Action",
    icon: "⚡",
    featured: true
  },

  {
    id: "undertale-yellow",
    name: "Undertale Yellow",
    category: "RPG",
    icon: "💛",
    featured: true
  },

  {
    id: "web-fishing",
    name: "Web Fishing",
    category: "Casual",
    icon: "🎣",
    featured: true
  },

  {
    id: "witch-heart",
    name: "Witch's Heart",
    category: "RPG",
    icon: "🧙",
    featured: false
  },

  {
    id: "yandere-simulator",
    name: "Yandere Simulator",
    category: "Story",
    icon: "🎀",
    featured: false
  },

  {
    id: "yume-nikki",
    name: "Yume Nikki",
    category: "RPG",
    icon: "🛏️",
    featured: false
  }

];


/* =========================================================
   STATE
   ========================================================= */

const state = {

  filter: "all",

  category: null,

  search: "",

  favorites:
    JSON.parse(
      localStorage.getItem(
        "evermint-favorites"
      ) || "[]"
    ),

  recent:
    JSON.parse(
      localStorage.getItem(
        "evermint-recent"
      ) || "[]"
    )

};


/* =========================================================
   HELPERS
   ========================================================= */

function $(selector) {

  return document.querySelector(
    selector
  );

}


function $$(selector) {

  return [
    ...document.querySelectorAll(
      selector
    )
  ];

}


function escapeHTML(value) {

  return value.replace(
    /[&<>"']/g,
    character => {

      const entities = {

        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"

      };

      return entities[character];

    }
  );

}


/* =========================================================
   STORAGE
   ========================================================= */

function saveState() {

  localStorage.setItem(
    "evermint-favorites",
    JSON.stringify(
      state.favorites
    )
  );

  localStorage.setItem(
    "evermint-recent",
    JSON.stringify(
      state.recent
    )
  );

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;

function showToast(message) {

  const toast = $("#toast");

  toast.textContent = message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    toastTimer
  );

  toastTimer = setTimeout(
    () => {

      toast.classList.remove(
        "show"
      );

    },
    2200
  );

}


/* =========================================================
   CLOCK
   ========================================================= */

function updateClock() {

  const clock = $("#clock");

  if (!clock) return;

  clock.textContent =
    new Intl.DateTimeFormat(
      undefined,
      {
        hour: "numeric",
        minute: "2-digit"
      }
    ).format(
      new Date()
    );

}

updateClock();

setInterval(
  updateClock,
  1000
);


/* =========================================================
   WINDOW MANAGEMENT
   ========================================================= */

let highestZIndex = 20;


function focusWindow(app) {

  const windowElement =
    document.querySelector(
      `#window-${app}`
    );

  if (!windowElement) {
    return;
  }

  highestZIndex++;

  windowElement.style.zIndex =
    highestZIndex;

  $$(".window").forEach(
    element => {

      element.classList.remove(
        "active"
      );

    }
  );

  windowElement.classList.add(
    "active"
  );

  updateTaskbar();

}


function openApp(app) {

  const windowElement =
    document.querySelector(
      `#window-${app}`
    );

  if (!windowElement) {
    return;
  }

  windowElement.classList.remove(
    "hidden"
  );

  focusWindow(
    app
  );

  $("#start-menu")
    .classList
    .add("hidden");

}


function closeApp(app) {

  const windowElement =
    document.querySelector(
      `#window-${app}`
    );

  if (!windowElement) {
    return;
  }

  windowElement.classList.add(
    "hidden"
  );

  updateTaskbar();

}


function minimizeApp(app) {

  closeApp(
    app
  );

}


function maximizeApp(app) {

  const windowElement =
    document.querySelector(
      `#window-${app}`
    );

  if (!windowElement) {
    return;
  }

  windowElement.classList.toggle(
    "maximized"
  );

  focusWindow(
    app
  );

}


/* =========================================================
   TASKBAR
   ========================================================= */

function updateTaskbar() {

  const taskbar =
    $("#taskbar-apps");

  taskbar.innerHTML = "";

  const applications = {

    games: "🎮 Games",

    browser: "🌐 Browser",

    settings: "⚙️ Settings"

  };


  Object.entries(
    applications
  ).forEach(
    ([app, label]) => {

      const windowElement =
        document.querySelector(
          `#window-${app}`
        );

      if (
        !windowElement ||
        windowElement.classList.contains(
          "hidden"
        )
      ) {
        return;
      }

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "taskbar-app";

      button.textContent =
        label;

      button.addEventListener(
        "click",
        () => {

          if (
            windowElement.classList.contains(
              "hidden"
            )
          ) {

            openApp(app);

          } else {

            focusWindow(app);

          }

        }
      );

      taskbar.appendChild(
        button
      );

    }
  );

}


/* =========================================================
   GAME LIBRARY
   ========================================================= */

function getFilteredGames() {

  const query =
    state.search
      .trim()
      .toLowerCase();


  return GAMES.filter(
    game => {

      if (
        state.filter ===
        "featured" &&
        !game.featured
      ) {
        return false;
      }


      if (
        state.filter ===
        "recent" &&
        !state.recent.includes(
          game.id
        )
      ) {
        return false;
      }


      if (
        state.filter ===
        "favorites" &&
        !state.favorites.includes(
          game.id
        )
      ) {
        return false;
      }


      if (
        state.category &&
        game.category !==
        state.category
      ) {
        return false;
      }


      if (
        query &&
        !`${game.name} ${game.category}`
          .toLowerCase()
          .includes(query)
      ) {
        return false;
      }


      return true;

    }
  );

}


function renderGames() {

  const grid =
    $("#game-grid");

  const games =
    getFilteredGames();


  $("#game-count").textContent =
    `${games.length} game${
      games.length === 1
        ? ""
        : "s"
    } in your library`;


  if (!games.length) {

    grid.innerHTML = `

      <div
        style="
          grid-column: 1 / -1;
          padding: 60px 20px;
          text-align: center;
          color: var(--muted);
        "
      >

        <div
          style="font-size: 38px;"
        >
          🌱
        </div>

        <h3
          style="color: var(--text);"
        >
          Nothing here yet
        </h3>

        <p>
          Try another search or category.
        </p>

      </div>

    `;

    return;

  }


  grid.innerHTML =
    games
      .map(
        (game, index) => {

          const favorite =
            state.favorites.includes(
              game.id
            );


          return `

            <article
              class="game-card"
              data-game="${escapeHTML(game.id)}"
            >

              <div
                class="
                  game-cover
                  cover-${index % 4}
                "
              >
                ${game.icon}
              </div>


              <button
                class="
                  favorite-button
                  ${
                    favorite
                      ? "active"
                      : ""
                  }
                "
                data-favorite="${escapeHTML(game.id)}"
                aria-label="Favorite"
              >
                ${
                  favorite
                    ? "♥"
                    : "♡"
                }
              </button>


              <div class="game-info">

                <div class="game-name">
                  ${escapeHTML(game.name)}
                </div>

                <div class="game-category">
                  ${escapeHTML(game.category)}
                </div>

              </div>

            </article>

          `;

        }
      )
      .join("");


  $$(".game-card").forEach(
    card => {

      card.addEventListener(
        "click",
        event => {

          if (
            event.target.closest(
              "[data-favorite]"
            )
          ) {
            return;
          }

          launchGame(
            card.dataset.game
          );

        }
      );

    }
  );


  $$("[data-favorite]").forEach(
    button => {

      button.addEventListener(
        "click",
        event => {

          event.stopPropagation();

          const id =
            button.dataset.favorite;


          if (
            state.favorites.includes(
              id
            )
          ) {

            state.favorites =
              state.favorites.filter(
                item =>
                  item !== id
              );

          } else {

            state.favorites = [
              id,
              ...state.favorites
            ];

          }


          saveState();

          renderGames();

        }
      );

    }
  );

}


/* =========================================================
   GAME LAUNCHER
   ========================================================= */

function launchGame(id) {

  const game =
    GAMES.find(
      item =>
        item.id === id
    );

  if (!game) {
    return;
  }


  state.recent = [
    id,
    ...state.recent.filter(
      item =>
        item !== id
    )
  ].slice(0, 12);


  saveState();


  /*
    IMPORTANT:

    This is centralized so we only need to change the
    launch path here after confirming the exact structure
    of the port in your fork.

    Example:

      games/<game-id>/

    If the actual port lives elsewhere, change this line.
  */

  const launchPath =
    `games/${game.id}/`;


  showToast(
    `Opening ${game.name}...`
  );


  setTimeout(
    () => {

      window.location.href =
        launchPath;

    },
    250
  );

}


/* =========================================================
   DESKTOP / START MENU
   ========================================================= */

$$("[data-open]").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        openApp(
          button.dataset.open
        );

      }
    );

  }
);


$("#start-button")
  .addEventListener(
    "click",
    event => {

      event.stopPropagation();

      $("#start-menu")
        .classList
        .toggle("hidden");

    }
  );


document.addEventListener(
  "click",
  event => {

    if (
      !event.target.closest(
        "#start-menu"
      ) &&
      !event.target.closest(
        "#start-button"
      )
    ) {

      $("#start-menu")
        .classList
        .add("hidden");

    }

  }
);


/* =========================================================
   WINDOW BUTTONS
   ========================================================= */

$$("[data-close]").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        closeApp(
          button.dataset.close
        );

      }
    );

  }
);


$$("[data-minimize]").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        minimizeApp(
          button.dataset.minimize
        );

      }
    );

  }
);


$$("[data-maximize]").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        maximizeApp(
          button.dataset.maximize
        );

      }
    );

  }
);


$$(".window").forEach(
  windowElement => {

    windowElement.addEventListener(
      "pointerdown",
      () => {

        focusWindow(
          windowElement.dataset.app
        );

      }
    );

  }
);


/* =========================================================
   GAME FILTERS
   ========================================================= */

$$("[data-filter]").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        state.filter =
          button.dataset.filter;

        state.category =
          null;


        $$(".sidebar-item")
          .forEach(
            item =>
              item.classList.remove(
                "active"
              )
          );


        button.classList.add(
          "active"
        );


        renderGames();

      }
    );

  }
);


$$("[data-category]").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        state.category =
          button.dataset.category;

        state.filter =
          "all";


        $$(".sidebar-item")
          .forEach(
            item =>
              item.classList.remove(
                "active"
              )
          );


        button.classList.add(
          "active"
        );


        renderGames();

      }
    );

  }
);


/* =========================================================
   GAME SEARCH
   ========================================================= */

$("#game-search-input")
  .addEventListener(
    "input",
    event => {

      state.search =
        event.target.value;

      renderGames();

    }
  );


/* =========================================================
   START SEARCH
   ========================================================= */

$("#start-search-input")
  .addEventListener(
    "input",
    event => {

      const query =
        event.target.value
          .trim()
          .toLowerCase();


      if (!query) {
        return;
      }


      const game =
        GAMES.find(
          item =>
            item.name
              .toLowerCase()
              .includes(query)
        );


      if (!game) {
        return;
      }


      openApp(
        "games"
      );


      $("#game-search-input")
        .value =
        event.target.value;


      state.search =
        event.target.value;


      renderGames();

    }
  );


/* =========================================================
   BROWSER
   ========================================================= */

$("#browser-go")
  .addEventListener(
    "click",
    () => {

      const address =
        $("#browser-address")
          .value
          .trim();


      if (!address) {
        return;
      }


      /*
        Scramjet integration goes here.

        The static OS deliberately does not pretend to
        proxy a website itself.
      */

      showToast(
        "Scramjet isn't connected yet."
      );

    }
  );


$("#browser-address")
  .addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter"
      ) {

        $("#browser-go").click();

      }

    }
  );


$("#browser-back")
  .addEventListener(
    "click",
    () => {

      showToast(
        "Browser navigation will be handled by Scramjet."
      );

    }
  );


$("#browser-forward")
  .addEventListener(
    "click",
    () => {

      showToast(
        "Browser navigation will be handled by Scramjet."
      );

    }
  );


$("#browser-reload")
  .addEventListener(
    "click",
    () => {

      showToast(
        "Browser reload will be handled by Scramjet."
      );

    }
  );


/* =========================================================
   SETTINGS
   ========================================================= */

function applySettings() {

  const accent =
    localStorage.getItem(
      "evermint-accent"
    ) ||
    "#20a464";


  document.documentElement
    .style
    .setProperty(
      "--accent",
      accent
    );


  const wallpaper =
    localStorage.getItem(
      "evermint-wallpaper"
    ) ||
    "mint";


  const desktop =
    $("#desktop");


  desktop.classList.remove(
    "wallpaper-mint",
    "wallpaper-meadow",
    "wallpaper-white"
  );


  desktop.classList.add(
    `wallpaper-${wallpaper}`
  );


  const reducedMotion =
    localStorage.getItem(
      "evermint-reduced-motion"
    ) === "true";


  document.body.classList.toggle(
    "reduce-motion",
    reducedMotion
  );


  $("#accent-color").value =
    accent;


  $("#wallpaper-select").value =
    wallpaper;


  $("#reduced-motion").checked =
    reducedMotion;

}


$("#accent-color")
  .addEventListener(
    "input",
    event => {

      localStorage.setItem(
        "evermint-accent",
        event.target.value
      );

      applySettings();

    }
  );


$("#wallpaper-select")
  .addEventListener(
    "change",
    event => {

      localStorage.setItem(
        "evermint-wallpaper",
        event.target.value
      );

      applySettings();

    }
  );


$("#reduced-motion")
  .addEventListener(
    "change",
    event => {

      localStorage.setItem(
        "evermint-reduced-motion",
        event.target.checked
      );

      applySettings();

    }
  );


$("#reset-settings")
  .addEventListener(
    "click",
    () => {

      localStorage.removeItem(
        "evermint-accent"
      );

      localStorage.removeItem(
        "evermint-wallpaper"
      );

      localStorage.removeItem(
        "evermint-reduced-motion"
      );

      applySettings();

      showToast(
        "Evermint settings reset."
      );

    }
  );


/* =========================================================
   INITIALIZE
   ========================================================= */

renderGames();

applySettings();

updateTaskbar();


/* =========================================================
   BOOT
   ========================================================= */

window.addEventListener(
  "load",
  () => {

    setTimeout(
      () => {

        const boot =
          $("#boot-screen");

        boot.classList.add(
          "fade-out"
        );


        setTimeout(
          () => {

            boot.remove();

          },
          400
        );

      },
      1100
    );

  }
);
