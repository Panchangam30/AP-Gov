/* ----------------------------------------------------------
   AP Government Photo Project — carousel + rating logic
   ---------------------------------------------------------- */

const items = [
  {
    img: "images/01-cnc-plotter.jpg",
    name: "CNC Handwriting Plotter",
    term: "Delegated Powers",
    tag: "Principal & Agent",
    analysis: [
      "Delegated powers are powers that get handed down from one group to another so they can do a job for them. For example, Congress gives some of its power to agencies so they can carry out the laws. The plotter works the same way, it doesn't do anything on its own. When I tell it to write \"hello,\" it writes exactly \"hello\" and nothing else.",
      "The idea behind this is the power still belongs to me, just like the power still belongs to Congress, but the actual work gets done by something else. The plotter is like the agency, it only does what I give it permission to do.",
      "This ties back to the main theme that power is supposed to be spread out instead of one person holding all of it. The work gets handed off instead of staying bunched up in one place."
    ]
  },
  {
    img: "images/02-bruce-lee.jpg",
    name: "Bruce Lee Statue",
    term: "Foreign Policy",
    tag: "Diplomacy & Trade",
    analysis: [
      "Foreign policy is how a country deals with other countries, like trade, talking things out, and sharing culture. Bruce Lee fits this because he was kind of a bridge between two places, he was born in America but grew up in Hong Kong, so he brought Chinese culture into American movies and got Americans interested in Asia.",
      "To connect, this is similar to how the government handles the back and forth between the U.S. and the rest of the world. The statue basically shows \"soft power,\" which is when a country builds relationships through culture instead of using force.",
      "This connects to the big theme too, because even the power to deal with other countries gets shared between the president and Congress instead of being held by just one of them."
    ]
  },
  {
    img: "images/03-water-bottles.jpg",
    name: "Water Bottle Case",
    term: "Federalism",
    tag: "Shared Sovereignty",
    analysis: [
      "Federalism is when power gets split between one national government and a bunch of state governments. Each water bottle stands for a state, every bottle is its own thing but they're all held together under one wrapper, which is like the national government, so no single bottle is above the rest.",
      "The idea behind this is the states stay separate but still answer to one bigger power. To add on, under the Articles of Confederation the bottles would have been loose and on their own, but the Constitution added that wrapper to hold them all together.",
      "This goes right to the main theme, splitting power between the national and state governments is one of the biggest ways the system keeps any one level from holding it all."
    ]
  },
  {
    img: "images/04-trophy.jpg",
    name: "Trophy",
    term: "Winner-Take-All",
    tag: "Electoral College",
    analysis: [
      "Winner take all means whoever gets the most votes takes the whole prize and second place gets nothing. This is how 48 states give out their Electoral College votes, if you win the popular vote in that state even by a little, you get all of the electors.",
      "A trophy shows this perfectly, only one person takes it home and everyone else leaves with nothing no matter how close it was. Essentially it's an all or nothing system, which is why campaigns fight so hard over the swing states.",
      "This still ties back to the theme because the power to choose who's in charge comes straight from the people's votes. It gets handed out by the voters instead of just taken."
    ]
  },
  {
    img: "images/05-drone.jpg",
    name: "Mini Drone / Flying Toy",
    term: "Delegated Discretionary Authority",
    tag: "Bureaucratic Discretion",
    analysis: [
      "Discretionary authority is when agencies get to make their own choices about how to carry out a law when Congress doesn't spell out every detail. They get told the goal but they have to figure out the rest on their own.",
      "The drone works like this, I turn it on and let it go but it uses its own sensors to hover, dodge stuff, and stay balanced, which are choices I never actually told it to make. Basically it stays inside the limits I set but still makes its own decisions inside those limits, just like an agency does.",
      "This connects to the theme since power gets handed out to the agencies instead of staying bunched up in one spot, but it still has limits on it so it doesn't get out of control."
    ]
  },
  {
    img: "images/06-router.jpg",
    name: "Wi-Fi Router",
    term: "Linkage Institution",
    tag: "Connecting Citizens",
    analysis: [
      "A linkage institution is something that connects regular people to the government, like elections, political parties, interest groups, and the media. A router does the same exact job for a network, every device needs it to reach the internet and without it they're all cut off.",
      "The idea behind this is people need linkage institutions to reach the government the same way devices need the router. To connect, it's the thing in the middle that takes a bunch of separate people and turns them into part of something bigger.",
      "This ties back to the main theme because it keeps power connected to the people instead of letting the government drift away from them."
    ]
  },
  {
    img: "images/07-game.jpg",
    name: "Strategy Game (Sequence)",
    term: "Checks and Balances",
    tag: "Separated Branches",
    analysis: [
      "Checks and balances is when each branch can limit the other branches so no one branch gets too powerful. Congress makes a law, the president can veto it, and the courts can throw it out, so every move can be answered.",
      "A two player strategy game works the same way, every move I make my opponent can counter, and no single move just wins the game because there's always a response. Basically the constant back and forth is exactly how the three branches keep each other in check.",
      "This is basically the heart of the whole theme, every branch can limit the others so no single branch ever ends up with too much power."
    ]
  },
  {
    img: "images/08-microphone.jpg",
    name: "Microphone",
    term: "First Amendment",
    tag: "Free Speech",
    analysis: [
      "The First Amendment protects things like free speech, press, religion, and the right to protest, so the government can't censor what you say. A microphone is basically the tool for that, it takes one person's voice and makes it loud enough for everyone to hear.",
      "The idea behind this is free speech lets people get their ideas out there and join the conversation, and that's exactly what a mic does. It's literally having the right to speak and say what you want.",
      "This connects to the theme because it puts a limit on the government's power over the people. The people keep rights that the government isn't allowed to take away."
    ]
  },
  {
    img: "images/09-backpack.jpg",
    name: "Backpack with Compartments",
    term: "Separation of Powers",
    tag: "Three Branches",
    analysis: [
      "Separation of powers splits the government into three branches, legislative, executive, and judicial, and each one has its own job so no single branch holds all the power. A backpack with different compartments shows this, each pocket holds a different thing and keeps it from mixing with the rest.",
      "To connect, each branch sticks to its own job the same way the pockets stay separate. The dividers in the backpack are what keep everything organized, just like the branches staying separate is what keeps the government balanced.",
      "This is right at the center of the theme, dividing the government into three branches is the main way power gets split up instead of held by one."
    ]
  },
  {
    img: "images/10-strainer.jpg",
    name: "Strainer / Sieve",
    term: "Selective Incorporation",
    tag: "14th Amendment",
    analysis: [
      "Selective incorporation is the slow case by case way the Supreme Court applies certain rights from the Bill of Rights to the states using the 14th Amendment. The Court doesn't apply all of them at once, it picks which ones get through.",
      "A strainer does the same thing, it lets some stuff pass through and holds the rest back. The idea behind this is the Court filters the rights one at a time and decides which ones the states have to follow, just like a strainer sorts out what goes through and what doesn't.",
      "This ties back to the theme because it spreads those limits on power down to the states too, so people are protected everywhere and not just from the national government."
    ]
  },
  {
    img: "images/11-smoke-detector.jpg",
    name: "Smoke Detector",
    term: "Congressional Oversight",
    tag: "Watchdog Role",
    analysis: [
      "Congressional oversight is when Congress keeps an eye on the executive branch by holding hearings, doing investigations, and checking that the laws are actually being followed and the money is spent the right way. A smoke detector does the same kind of watching, it's always on in the background quietly checking, and the second something is wrong it goes off.",
      "Basically Congress watches the agencies the same way the detector watches for a fire. It's always paying attention and ready to call it out before a small problem turns into something big.",
      "This connects to the main theme since it's another way of checking power, Congress keeps the executive branch from just doing whatever it wants."
    ]
  },
  {
    img: "images/12-magnet.jpg",
    name: "Magnet",
    term: "Interest Group",
    tag: "Policy Influence",
    analysis: [
      "An interest group is a group of people who want the same thing and try to get the government to do it their way, pulling in members, money, and attention for their cause. A magnet is a good way to picture that, it pulls everything around it toward one spot.",
      "The idea behind this is an interest group pulls in people and resources and then aims all of it at the lawmakers. To add on, the stronger the magnet the more it pulls, just like a group with more money has more pull on what the government does.",
      "This ties back to the theme because it gives the people a way to push back on power, so influence gets spread across a bunch of groups instead of just a few."
    ]
  },
  {
    img: "images/13-receipt.jpg",
    name: "Receipt",
    term: "Fiscal Policy",
    tag: "Taxing & Spending",
    analysis: [
      "Fiscal policy is when the government uses taxing and spending to affect the economy. A receipt is basically the everyday version of that, it shows what was spent, what got taxed, and the total at the bottom.",
      "The idea behind this is it's the paper trail of money moving around, which is the same thing the government does with its budget just way bigger. Essentially it takes the whole idea of taxing and spending and puts it on something you can actually hold in your hand.",
      "This connects to the theme too, since even the government's power over money has to be written down and accounted for instead of used in secret."
    ]
  },
  {
    img: "images/14-scale.jpg",
    name: "Scale",
    term: "Rule of Law",
    tag: "Equal Justice",
    analysis: [
      "Rule of law means everybody, even the leaders, has to follow the same laws and gets treated the same way, so nobody is above it. A scale shows this through balance, it weighs whatever you put on it the same way every time and doesn't pick a side.",
      "To connect, that fair and equal treatment is the whole point of rule of law. The idea behind this is the law measures everyone by the same standard, which is why the scales of justice have always been the symbol for it.",
      "This is a huge part of the theme, even the leaders have to follow the law, so nobody ever ends up above the power."
    ]
  },
  {
    img: "images/15-puzzle.jpg",
    name: "Puzzle Pieces",
    term: "Pluralist Democracy",
    tag: "Many Competing Groups",
    analysis: [
      "Pluralist democracy is when a lot of different groups compete and bargain and the policy that comes out is the balance between all of them, so no single group runs everything. A puzzle shows this well, every piece is different and on its own it's just a small part.",
      "The idea behind this is no one piece takes over, and only when they all connect do you actually see the full picture. Basically the different interest groups are like the pieces, each one adds a part, and together they make the whole policy picture.",
      "This ties the whole theme together, power gets spread across a ton of different groups so no single one ever runs everything."
    ]
  }
];

/* ---------- State ---------- */
const STORAGE_KEY = "apgov-ratings";
let ratings = loadRatings();
let index = 0;
const total = items.length;               // number of photo slides
const slideCount = total + 1;             // + results slide

function loadRatings() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveRatings() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings)); } catch {}
}

/* ---------- Build slides ---------- */
const track = document.getElementById("track");
const dotsWrap = document.getElementById("dots");

function starRow(i, value) {
  let html = '<div class="stars" data-index="' + i + '">';
  for (let s = 1; s <= 5; s++) {
    html += '<span class="star' + (s <= value ? ' filled' : '') + '" data-star="' + s + '">&#9733;</span>';
  }
  html += "</div>";
  return html;
}

function buildSlides() {
  let html = "";
  items.forEach((it, i) => {
    const r = ratings[i] || 0;
    html += `
      <article class="slide">
        <div class="media">
          <div class="num">${i + 1}</div>
          <img src="${it.img}" alt="${it.name}" />
        </div>
        <div class="body">
          <div class="item-name">${it.name}</div>
          <div class="term">${it.term}</div>
          ${it.analysis.map(p => `<p class="analysis">${p}</p>`).join("")}
          <span class="tag">${it.tag}</span>
          <div class="rating">
            <div class="label">How well does this image match the term?</div>
            ${starRow(i, r)}
            <div class="you-rated" data-rated="${i}">${r ? "You rated this <b>" + r + "/5</b>" : "Tap a star to rate"}</div>
          </div>
        </div>
      </article>`;
  });

  // results slide
  html += `
    <section class="results" id="resultsSlide">
      <h2>Your Ratings</h2>
      <div class="avg" id="avgLine"></div>
      <div class="result-list" id="resultList"></div>
      <button class="reset-btn" id="resetBtn">Reset all ratings</button>
    </section>`;

  track.appendChild(document.createRange().createContextualFragment(html));

  // dots (one per photo + one for results)
  let dotsHtml = "";
  for (let i = 0; i < slideCount; i++) {
    dotsHtml += `<button class="dot" data-go="${i}" aria-label="Go to slide ${i + 1}"></button>`;
  }
  dotsWrap.innerHTML = dotsHtml;
}

/* ---------- Carousel movement ---------- */
const currentEl = document.getElementById("current");
const totalEl = document.getElementById("total");
const progressBar = document.getElementById("progressBar");

function update() {
  track.style.transform = `translateX(-${index * 100}%)`;

  const onResults = index === total;
  currentEl.textContent = onResults ? "★" : index + 1;
  totalEl.textContent = total;
  progressBar.style.width = ((index + 1) / slideCount) * 100 + "%";

  // dots
  document.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("active", i === index);
    d.classList.toggle("rated", i < total && !!ratings[i]);
  });

  if (onResults) renderResults();
}

function go(i) {
  index = Math.max(0, Math.min(slideCount - 1, i));
  update();
}

/* ---------- Results rendering ---------- */
function renderResults() {
  const list = document.getElementById("resultList");
  const avgLine = document.getElementById("avgLine");
  const rated = items.map((_, i) => ratings[i]).filter(Boolean);
  const avg = rated.length ? (rated.reduce((a, b) => a + b, 0) / rated.length).toFixed(1) : "—";

  avgLine.innerHTML = rated.length
    ? `You've rated <b>${rated.length}</b> of ${total}. Average match score: <b>${avg}/5</b>.`
    : `You haven't rated anything yet, go back and tap some stars.`;

  list.innerHTML = items.map((it, i) => {
    const r = ratings[i] || 0;
    let stars = "";
    for (let s = 1; s <= 5; s++) stars += s <= r ? "★" : '<span class="empty">★</span>';
    return `
      <div class="result-row">
        <div class="r-name">${it.name}<small>${it.term}</small></div>
        <div class="r-stars">${stars}</div>
      </div>`;
  }).join("");
}

/* ---------- Events ---------- */
buildSlides();
totalEl.textContent = total;
update();

document.getElementById("prevBtn").addEventListener("click", () => go(index - 1));
document.getElementById("nextBtn").addEventListener("click", () => go(index + 1));

dotsWrap.addEventListener("click", (e) => {
  const btn = e.target.closest(".dot");
  if (btn) go(+btn.dataset.go);
});

// star rating clicks (event delegation on track)
track.addEventListener("click", (e) => {
  const star = e.target.closest(".star");
  if (star) {
    const row = star.parentElement;
    const i = +row.dataset.index;
    const val = +star.dataset.star;
    ratings[i] = ratings[i] === val ? 0 : val;   // click same star again to clear
    saveRatings();
    // repaint this row
    row.querySelectorAll(".star").forEach((s, idx) => {
      s.classList.toggle("filled", idx + 1 <= ratings[i]);
    });
    const note = track.querySelector(`.you-rated[data-rated="${i}"]`);
    if (note) note.innerHTML = ratings[i] ? `You rated this <b>${ratings[i]}/5</b>` : "Tap a star to rate";
    document.querySelectorAll(".dot")[i]?.classList.toggle("rated", !!ratings[i]);
    return;
  }
  const reset = e.target.closest("#resetBtn");
  if (reset) {
    ratings = {};
    saveRatings();
    // clear stars across all slides
    track.querySelectorAll(".star").forEach(s => s.classList.remove("filled"));
    track.querySelectorAll(".you-rated").forEach(n => n.innerHTML = "Tap a star to rate");
    document.querySelectorAll(".dot").forEach(d => d.classList.remove("rated"));
    renderResults();
  }
});

// keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") go(index - 1);
  if (e.key === "ArrowRight") go(index + 1);
});

// touch / swipe — only act on a mostly-horizontal swipe so vertical scrolling still works
let startX = null, startY = null;
track.addEventListener("touchstart", (e) => {
  if (e.target.closest(".star, .reset-btn")) { startX = null; return; }  // don't swipe while tapping a control
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
}, { passive: true });
track.addEventListener("touchend", (e) => {
  if (startX === null) return;
  const dx = e.changedTouches[0].clientX - startX;
  const dy = e.changedTouches[0].clientY - startY;
  if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) {
    go(index + (dx < 0 ? 1 : -1));
  }
  startX = startY = null;
});
