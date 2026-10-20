"use strict";

const CURRENCY = "USD";
const fallbackImage = "public/images/image-fallback.svg";
const categories = [
  { slug: "home-decor", name: "Home Décor", image: "photo-1616486338812-3dadae4b4ace" },
  { slug: "kitchen-dining", name: "Kitchen & Dining", image: "photo-1600210492486-724fe5c67fb0" },
  { slug: "mirrors", name: "Mirrors", image: "photo-1618221195710-dd6b41faaea6" },
  { slug: "storage", name: "Storage & Organization", image: "photo-1600607687920-4e2a09cf159d" },
  { slug: "tableware", name: "Tableware", image: "photo-1615874694520-474822394e73" },
  { slug: "everyday-essentials", name: "Everyday Essentials", image: "photo-1600566753086-00f18fb6b3ea" },
];
const imageUrl = (id, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const galleryImages = {
  "home-decor": "photo-1600607687920-4e2a09cf159d",
  "kitchen-dining": "photo-1615874694520-474822394e73",
  mirrors: "photo-1600210492486-724fe5c67fb0",
  storage: "photo-1600566753190-17f0baa2a6c3",
  tableware: "photo-1615874694520-474822394e73",
  "everyday-essentials": "photo-1610701596007-11502861dcfa",
};
function makeProduct(id, slug, name, category, price, photo, description, options = {}) {
  return {
    id, slug, name, category, price, image: imageUrl(photo, 1100),
    gallery: [imageUrl(photo, 1400), imageUrl(options.secondImage || galleryImages[category] || photo)],
    description,
    longDescription: options.longDescription || `${description} Thoughtfully chosen for its considered form and everyday usefulness, it brings a quiet sense of intention to your home.`,
    stockStatus: options.stockStatus || "in-stock", variants: options.variants || [],
    dimensions: options.dimensions || "Please refer to product packaging for exact measurements.",
    materials: options.materials || "Material details available on product packaging.",
    care: options.care || "Wipe clean with a soft, dry cloth.",
    tags: options.tags || [], featured: Boolean(options.featured), newArrival: Boolean(options.newArrival),
    createdAt: options.createdAt || (options.newArrival ? "2026-10-01" : "2026-08-01"),
  };
}
const products = [
  makeProduct("vl-001", "arc-ceramic-vase", "Arc Ceramic Vase", "home-decor", 68, "photo-1578749556568-bc2c40e68b61", "A softly sculpted ceramic vase with a naturally tactile finish.", { featured: true, newArrival: true, materials: "Glazed stoneware", dimensions: "H 28 × W 17 cm", variants: ["Chalk", "Moss"], tags: ["ceramic", "pottery", "flowers", "shelf decor"] }),
  makeProduct("vl-002", "forma-stoneware-bowl", "Forma Stoneware Bowl", "tableware", 42, "photo-1610701596007-11502861dcfa", "Hand-finished stoneware with a gentle, organic silhouette.", { featured: true, materials: "Stoneware", variants: ["Ivory", "Olive"], tags: ["ceramic", "decorative bowl", "serving", "pottery"] }),
  makeProduct("vl-003", "hearth-candleholders", "Hearth Candleholders", "home-decor", 54, "photo-1603006905003-be475563bc59", "A sculptural pair that brings a warm, considered glow to the table.", { featured: true, newArrival: true, materials: "Brushed metal", variants: ["Antique brass", "Forest"], tags: ["candle", "candle holder", "lighting", "decor"] }),
  makeProduct("vl-004", "oak-serving-board", "Oak Serving Board", "kitchen-dining", 76, "photo-1603199506016-b9a594b593c0", "A generous serving board crafted for relaxed gatherings.", { featured: true, materials: "Solid oak", care: "Hand wash and dry promptly. Treat periodically with food-safe oil.", tags: ["kitchen", "wood", "cheese board", "serving"] }),
  makeProduct("vl-005", "atelier-glass-set", "Atelier Glass Set", "tableware", 48, "photo-1547592180-85f173990554", "A set of four clear glasses with an understated, balanced profile.", { featured: true, newArrival: true, materials: "Mouth-blown borosilicate glass", variants: ["Set of 4"], tags: ["drinking glass", "glassware", "drinkware"] }),
  makeProduct("vl-006", "linen-table-runner", "Linen Table Runner", "kitchen-dining", 64, "photo-1600210492486-724fe5c67fb0", "Soft woven linen that brings an easy, natural layer to dining.", { featured: true, materials: "European flax linen", variants: ["Oat", "Sage"], tags: ["linen", "table linen", "dining", "textile"] }),
  makeProduct("vl-007", "form-wall-mirror", "Form Wall Mirror", "mirrors", 195, "photo-1618221195710-dd6b41faaea6", "A refined wall mirror with a softly rounded frame.", { featured: true, newArrival: true, materials: "Glass, oak veneer", dimensions: "H 80 × W 55 cm", tags: ["wall mirror", "oak", "entryway", "decor"] }),
  makeProduct("vl-008", "woven-storage-basket", "Woven Storage Basket", "storage", 58, "photo-1600607687920-4e2a09cf159d", "A softly structured basket for gathering everyday essentials.", { featured: true, materials: "Woven seagrass", variants: ["Small", "Large"], tags: ["woven", "basket", "organization", "natural"] }),
  makeProduct("vl-009", "ceramic-oil-bottle", "Ceramic Oil Bottle", "kitchen-dining", 36, "photo-1490312278390-ab64016e0aa9", "A useful countertop companion with a considered ceramic shape.", { newArrival: true, materials: "Glazed stoneware", variants: ["Cream", "Sage"], tags: ["oil dispenser", "kitchen storage", "ceramic"] }),
  makeProduct("vl-010", "everyday-serving-tray", "Everyday Serving Tray", "everyday-essentials", 52, "photo-1603199506016-b9a594b593c0", "A versatile tray for serving, styling, and keeping small things in order.", { featured: true, materials: "Oak wood", tags: ["tray", "wood", "serving", "organizer"] }),
  makeProduct("vl-011", "ribbed-glass-carafe", "Ribbed Glass Carafe", "tableware", 44, "photo-1547592180-85f173990554", "A clear glass carafe with subtle ribbing and an easy-pour shape.", { newArrival: true, materials: "Recycled glass", tags: ["glass", "carafe", "jug", "drinkware"] }),
  makeProduct("vl-012", "cast-iron-casserole", "Cast Iron Casserole", "kitchen-dining", 148, "photo-1556911220-bff31c812dba", "A dependable kitchen staple designed for slow, generous cooking.", { materials: "Enameled cast iron", variants: ["Sage", "Cream"], dimensions: "3.5 L capacity", tags: ["cookware", "pot", "cast iron", "cooking"] }),
  makeProduct("vl-013", "oval-decorative-mirror", "Oval Decorative Mirror", "mirrors", 168, "photo-1616486338812-3dadae4b4ace", "An elegant oval mirror that adds light and quiet character.", { newArrival: true, materials: "Glass, powder-coated metal", dimensions: "H 72 × W 42 cm", tags: ["oval mirror", "wall mirror", "decor"] }),
  makeProduct("vl-014", "stackable-pantry-jars", "Stackable Pantry Jars", "storage", 39, "photo-1600566753086-00f18fb6b3ea", "Clear, stackable jars that make pantry staples easy to see.", { materials: "Borosilicate glass, beech lid", variants: ["Set of 3"], tags: ["pantry", "jar", "kitchen storage", "glass"] }),
  makeProduct("vl-015", "cotton-kitchen-towels", "Cotton Kitchen Towels", "everyday-essentials", 32, "photo-1600210492486-724fe5c67fb0", "A practical set of soft, absorbent woven cotton towels.", { newArrival: true, materials: "Woven cotton", variants: ["Set of 2"], tags: ["kitchen linen", "tea towel", "cotton", "textile"] }),
  makeProduct("vl-016", "sculpted-bud-vase", "Sculpted Bud Vase", "home-decor", 34, "photo-1578749556568-bc2c40e68b61", "A small sculptural vase for a single stem or considered shelf styling.", { materials: "Glazed stoneware", variants: ["Chalk", "Moss"], tags: ["ceramic", "bud vase", "flowers", "pottery"] }),
  makeProduct("vl-017", "low-stoneware-platter", "Low Stoneware Platter", "tableware", 62, "photo-1610701596007-11502861dcfa", "A generous low platter made for sharing food and simple moments.", { materials: "Stoneware", dimensions: "Ø 32 cm", tags: ["ceramic", "serving dish", "platter", "pottery"] }),
  makeProduct("vl-018", "woven-catchall-bowl", "Woven Catchall Bowl", "storage", 46, "photo-1600607687920-4e2a09cf159d", "A tactile catchall for keys, linens, or small household objects.", { newArrival: true, materials: "Woven seagrass", tags: ["woven", "catchall", "organizer", "bowl"] }),
  makeProduct("vl-019", "olivewood-utensil-set", "Olivewood Utensil Set", "kitchen-dining", 49, "photo-1556911220-bff31c812dba", "A useful set of smooth wooden utensils for everyday kitchen preparation.", { materials: "Olivewood", care: "Hand wash and dry promptly. Do not soak.", variants: ["Set of 4"], tags: ["kitchen utensils", "wooden spoon", "cooking tools", "olivewood"] }),
];
const navItems = [
  ["Shop", "/shop"], ["Collections", "/shop"], ["Kitchen & Dining", "/shop?category=kitchen-dining"],
  ["Home Décor", "/shop?category=home-decor"], ["Mirrors", "/shop?category=mirrors"],
  ["Storage", "/shop?category=storage"], ["Our Story", "/our-story"],
];
const paths = {
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>', left: '<path d="M19 12H5m7 7-7-7 7-7"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>', down: '<path d="m6 9 6 6 6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>', minus: '<path d="M5 12h14"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>', menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
  bag: '<path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  user: '<circle cx="12" cy="8" r="3.5"/><path d="M4.5 20c.6-3.5 3.5-5.5 7.5-5.5s6.9 2 7.5 5.5"/>',
  sparkle: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 11 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z"/>',
  check: '<path d="m5 12 4 4L19 6"/>', sliders: '<path d="M4 7h9m4 0h3M4 17h3m4 0h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
  downRight: '<path d="M7 7 17 17M17 7v10H7"/>',
};
function icon(name, size = 18) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${paths[name] || ""}</svg>`;
}
function esc(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
function price(amount) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: CURRENCY, maximumFractionDigits: 2 }).format(amount);
}
function categoryName(slug) {
  return categories.find((entry) => entry.slug === slug)?.name || slug;
}
function image(src, alt = "", lazy = false) {
  return `<img src="${esc(src)}" alt="${esc(alt)}" ${lazy ? 'loading="lazy"' : ""}>`;
}
function readStorage(key, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "null");
    return Array.isArray(parsed) ? parsed : fallback;
  } catch (error) {
    console.warn(`Could not read ${key} from local storage.`, error);
    return fallback;
  }
}
function readStorageValue(key) {
  try { return localStorage.getItem(key); }
  catch (error) { console.warn(`Could not read ${key} from local storage.`, error); return null; }
}
function writeStorageValue(key, value) {
  try { localStorage.setItem(key, value); }
  catch (error) { console.warn(`${key} could not be saved in local storage.`, error); }
}
function saveStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (error) { console.warn(`${key} changes are only available for this session.`, error); }
}
const validIds = new Set(products.map((item) => item.id));
const state = {
  cart: readStorage("verdant-cart", []).filter((line) => line && validIds.has(line.productId) && Number.isFinite(Number(line.quantity)) && Number(line.quantity) > 0)
    .map((line) => ({ key: `${line.productId}:${line.variant || ""}`, productId: line.productId, quantity: Math.min(99, Math.floor(Number(line.quantity))), variant: typeof line.variant === "string" ? line.variant : "" }))
    .filter((line) => line.quantity > 0),
  wishlist: [...new Set(readStorage("verdant-wishlist", []).filter((id) => validIds.has(id)))],
  menuOpen: false, searchOpen: false, searchQuery: "", mobileFilters: false,
  checkoutConfirmed: false, productVariant: "", productQuantity: 1, activeImage: 0, productAdded: false,
};
saveStorage("verdant-cart", state.cart);
saveStorage("verdant-wishlist", state.wishlist);
function countCart() { return state.cart.reduce((sum, line) => sum + line.quantity, 0); }
function addToCart(item, quantity = 1, variant = "") {
  if (!item || item.stockStatus !== "in-stock") return;
  const key = `${item.id}:${variant}`;
  const existing = state.cart.find((line) => line.key === key);
  if (existing) existing.quantity = Math.min(99, existing.quantity + Math.min(99, Math.max(1, Math.floor(Number(quantity) || 1))));
  else state.cart.push({ key, productId: item.id, quantity: Math.min(99, Math.max(1, Math.floor(Number(quantity) || 1))), variant });
  saveStorage("verdant-cart", state.cart);
}
function toggleWishlist(id) {
  if (!validIds.has(id)) return;
  state.wishlist = state.wishlist.includes(id) ? state.wishlist.filter((entry) => entry !== id) : [...state.wishlist, id];
  saveStorage("verdant-wishlist", state.wishlist);
}
function routeUrl(path) { return `#${path.startsWith("/") ? path : `/${path}`}`; }
function headerTemplate() {
  const hidden = readStorageValue("verdant-announcement-dismissed") === "true";
  return `${hidden ? "" : `<div class="announcement"><span>Thoughtfully chosen pieces for a more beautiful home.</span><button data-action="dismiss-announcement" aria-label="Dismiss announcement">${icon("close", 13)}</button></div>`}
  <header class="site-header"><button class="icon-button menu-toggle" data-action="toggle-menu" aria-label="${state.menuOpen ? "Close menu" : "Open menu"}" aria-expanded="${state.menuOpen}" aria-controls="mobile-navigation">${icon(state.menuOpen ? "close" : "menu", 22)}</button>
  <a class="wordmark" href="#/" aria-label="Verdant Living home">VERDANT <span>LIVING</span><small>ELEVATE THE EVERYDAY.</small></a>
  <nav class="desktop-nav" aria-label="Main navigation">${navItems.map(([label, to], i) => `<a class="nav-link" ${i === 0 ? 'data-shop-main="true"' : ""} href="${routeUrl(to)}">${label}</a>`).join("")}</nav>
  <div class="header-actions"><button class="icon-button" data-action="open-search" aria-label="Open search">${icon("search")}</button><a class="icon-button account-icon" href="#/contact" aria-label="Contact customer support">${icon("user")}</a><a class="icon-button count-icon" href="#/wishlist" aria-label="Wishlist, ${state.wishlist.length} saved items">${icon("heart")}<span>${state.wishlist.length}</span></a><a class="icon-button count-icon" href="#/cart" aria-label="Shopping bag, ${countCart()} items">${icon("bag")}<span>${countCart()}</span></a></div>
  ${state.menuOpen ? `<nav class="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation"><p class="eyebrow">Explore VERDANT LIVING</p>${navItems.map(([label, to]) => `<a href="${routeUrl(to)}">${label}${icon("arrow", 16)}</a>`).join("")}<div class="mobile-menu-bottom"><a href="#/wishlist">Wishlist (${state.wishlist.length})</a><a href="#/contact">Customer care</a></div></nav>` : ""}</header>${state.searchOpen ? searchTemplate() : ""}`;
}
function searchTemplate() {
  const query = state.searchQuery.trim().toLowerCase();
  const matches = query ? products.filter((item) => `${item.name} ${categoryName(item.category)} ${item.description} ${item.tags.join(" ")}`.toLowerCase().includes(query)).slice(0, 5) : [];
  const content = query
    ? matches.length ? `<div class="search-results">${matches.map((item) => `<a class="search-result" href="${routeUrl(`/product/${item.slug}`)}">${image(item.image)}<span>${esc(item.name)}<small>${esc(categoryName(item.category))}</small></span><b>${price(item.price)}</b></a>`).join("")}</div>`
      : `<div class="search-results"><p class="empty-note">No pieces found for “${esc(state.searchQuery)}”. Try another search.</p></div>`
    : `<div class="search-suggestions"><p class="eyebrow">Popular categories</p>${categories.slice(0, 4).map((entry) => `<a href="${routeUrl(`/shop?category=${entry.slug}`)}">${esc(entry.name)}${icon("arrow", 15)}</a>`).join("")}</div>`;
  return `<div class="search-backdrop" data-action="backdrop-search"><section class="search-panel" role="dialog" aria-modal="true" aria-label="Product search"><div class="search-top"><span class="eyebrow">Find something considered</span><button class="icon-button" data-action="close-search" aria-label="Close search">${icon("close")}</button></div><label class="search-field">${icon("search", 20)}<input id="product-search" autofocus value="${esc(state.searchQuery)}" placeholder="Search home, kitchen, and more"><button type="button" data-action="clear-search" aria-label="Clear search">${icon("close", 16)}</button></label>${content}<a class="text-link search-all" href="${routeUrl(`/shop?q=${encodeURIComponent(state.searchQuery)}`)}">View all results ${icon("arrow", 15)}</a></section></div>`;
}
function footerTemplate() {
  return `<footer class="site-footer"><div class="footer-main"><div class="footer-brand"><a class="wordmark footer-wordmark" href="#/">VERDANT <span>LIVING</span><small>ELEVATE THE EVERYDAY.</small></a><p>Thoughtfully selected home essentials that bring beauty and function to everyday living.</p></div><div><h3>Explore</h3><a href="#/shop">Shop all</a><a href="#/shop?category=home-decor">Home décor</a><a href="#/shop?category=kitchen-dining">Kitchen & dining</a><a href="#/shop?category=mirrors">Mirrors</a><a href="#/our-story">Our story</a></div><div><h3>Customer care</h3><a href="#/contact">Contact us</a><a href="#/faq">Frequently asked questions</a><a href="#/shipping">Shipping information</a><a href="#/returns">Returns information</a></div><div><h3>Information</h3><a href="#/privacy">Privacy policy</a><a href="#/terms">Terms & conditions</a><p class="placeholder-contact">Contact details to be supplied by store owner.</p></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Verdant Living · Demo storefront</span><span>Designed for considered living.</span></div></footer>`;
}
function sectionHeading(eyebrow, title, copy = "", link = "", linkText = "Explore all") {
  return `<div class="section-heading"><div><span class="eyebrow">${eyebrow}</span><h2>${title}</h2>${copy ? `<p>${copy}</p>` : ""}</div>${link ? `<a class="text-link section-link" href="${routeUrl(link)}">${linkText} ${icon("arrow", 16)}</a>` : ""}</div>`;
}
function productCard(item) {
  const saved = state.wishlist.includes(item.id);
  const available = item.stockStatus === "in-stock";
  return `<article class="product-card"><div class="product-image-wrap"><a href="${routeUrl(`/product/${item.slug}`)}" aria-label="View ${esc(item.name)}">${image(item.image, item.name, true)}</a>${item.newArrival ? '<span class="product-label">New arrival</span>' : ""}<button class="wishlist-button ${saved ? "saved" : ""}" data-action="wishlist" data-id="${item.id}" aria-label="${saved ? "Remove" : "Add"} ${esc(item.name)} ${saved ? "from" : "to"} wishlist" aria-pressed="${saved}">${icon("heart")}</button><button class="quick-add" data-action="quick-add" data-id="${item.id}" ${available ? "" : "disabled"}><span>${available ? "Add to bag" : "Unavailable"}</span>${icon("plus", 16)}</button></div><div class="product-card-meta"><div><a class="product-name" href="${routeUrl(`/product/${item.slug}`)}">${esc(item.name)}</a><p>${esc(categoryName(item.category))}</p></div><span class="product-price">${price(item.price)}</span></div></article>`;
}
function productGrid(list) { return `<div class="product-grid">${list.map(productCard).join("")}</div>`; }
function valueItem(title, copy) { return `<article class="value-item">${icon("sparkle", 19)}<h3>${title}</h3><p>${copy}</p></article>`; }
function breadcrumbs(items) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#/">Home</a>${items.map((item) => `<span>${icon("chevron", 13)}${item.to ? `<a href="${routeUrl(item.to)}">${esc(item.label)}</a>` : `<span aria-current="page">${esc(item.label)}</span>`}</span>`).join("")}</nav>`;
}
function newsletter() {
  return `<section class="newsletter"><div><span class="eyebrow">A considered note, now and then</span><h2>A little inspiration<br>for the everyday.</h2></div><div class="newsletter-form-wrap"><p>Thoughtful ideas, new pieces, and small ways to make more of home.</p><form data-form="newsletter" novalidate><label class="sr-only" for="newsletter-email">Email address</label><input id="newsletter-email" name="email" type="email" placeholder="Your email address"><button class="button button-dark">Subscribe ${icon("arrow", 16)}</button></form><small class="form-message" aria-live="polite">Demo signup only — no email will be sent.</small></div></section>`;
}
function homePage() {
  const featured = products.filter((item) => item.featured).slice(0, 4);
  const arrivals = products.filter((item) => item.newArrival).slice(0, 4);
  return `<main><section class="hero"><div class="hero-copy"><span class="eyebrow hero-kicker"><span></span>A quieter kind of home</span><h1>Make room for <em>beautiful</em> living.</h1><p>Thoughtfully selected home essentials that bring beauty, function, and a sense of calm to every corner.</p><div class="hero-actions"><a class="button button-dark" href="#/shop">Explore the collection ${icon("arrow", 16)}</a><a class="underlined-link" href="#/our-story">Discover our story</a></div><div class="hero-note"><span>01</span><span>Considered pieces for everyday rituals</span></div></div><div class="hero-image">${image(imageUrl("photo-1600210492486-724fe5c67fb0", 1800), "A calm living room with natural textures and warm neutral furnishings")}<div class="hero-image-caption"><span>Living, thoughtfully</span>${icon("downRight", 18)}</div></div><span class="hero-index">VERDANT LIVING&nbsp; — &nbsp;EST. IN EVERYDAY</span></section>
  <section class="category-section page-section">${sectionHeading("The considered edit", "Find your feeling at home.", "", "/shop", "Shop all pieces")}<div class="category-grid">${categories.map((item, i) => `<a class="category-card" href="#/shop?category=${item.slug}">${image(imageUrl(item.image, 720), "", true)}<div><span>0${i + 1}</span><h3>${esc(item.name)}</h3>${icon("arrow", 18)}</div></a>`).join("")}</div></section>
  <section class="bestsellers page-section">${sectionHeading("Loved for a reason", "Everyday favourites.", "Pieces with thoughtful form, made to find their place in your home.", "/shop?sort=featured")}${productGrid(featured)}</section>
  <section class="editorial"><div class="editorial-image">${image(imageUrl("photo-1616486338812-3dadae4b4ace", 1400), "Softly lit interior styled with natural materials and considered details", true)}</div><div class="editorial-copy"><span class="eyebrow">A little more intention</span><h2>Considered details.<br><em>Beautifully lived in.</em></h2><p>We believe the things we use every day deserve a little thought. Explore timeless forms, natural textures, and useful pieces that make a house feel like yours.</p><a class="button button-outline" href="#/our-story">A note on our point of view ${icon("arrow", 16)}</a><span class="editorial-number">02 / A CONSIDERED HOME</span></div></section>
  <section class="arrivals page-section">${sectionHeading("Just found their way in", "New to the collection.", "", "/shop?sort=newest", "See new arrivals")}${productGrid(arrivals)}</section>
  <section class="values-strip"><span class="eyebrow">The things we come back to</span><div class="value-items">${valueItem("Thoughtful design", "A balance of form and function.")}${valueItem("Everyday usefulness", "Made to be lived with, every day.")}${valueItem("Quality first", "Considered materials and lasting forms.")}${valueItem("A sense of calm", "Quiet details for a more settled home.")}</div></section>${newsletter()}</main>`;
}
function emptyState(title, copy, to = "/shop", cta = "Explore the collection") {
  return `<div class="empty-state"><span class="empty-icon">${icon("bag", 24)}</span><h2>${title}</h2><p>${copy}</p><a class="button button-dark" href="${routeUrl(to)}">${cta} ${icon("arrow", 16)}</a></div>`;
}
function shopPage(path, params) {
  const category = params.get("category") || "", query = params.get("q") || "", sort = params.get("sort") || "featured";
  const max = Number(params.get("max")) || 0;
  let found = products.filter((item) => (!category || item.category === category) && (!max || item.price <= max) &&
    (!query || `${item.name} ${categoryName(item.category)} ${item.description} ${item.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase())));
  if (sort === "newest") found.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  else if (sort === "price-low") found.sort((a, b) => a.price - b.price);
  else if (sort === "price-high") found.sort((a, b) => b.price - a.price);
  else found.sort((a, b) => Number(b.featured) - Number(a.featured));
  const title = query ? `Search results for “${esc(query)}”` : category ? esc(categoryName(category)) : "The collection";
  const radio = (name, value, checked, label, key) => `<label class="filter-option"><input type="radio" name="${name}" data-filter="${key}" value="${value}" ${checked ? "checked" : ""}><span>${label}</span></label>`;
  const filters = `<div class="filter-controls"><div class="filter-group"><h3>Category</h3>${categories.map((item) => radio("category", item.slug, category === item.slug, esc(item.name), "category")).join("")}</div><div class="filter-group"><h3>Price</h3>${radio("price", "", !max, "All prices", "max")}${radio("price", "50", max === 50, `Under ${price(50)}`, "max")}${radio("price", "100", max === 100, `Under ${price(100)}`, "max")}</div>${category || max || query ? `<button class="clear-filters" data-action="clear-filters">Clear all filters ${icon("close", 14)}</button>` : ""}</div>`;
  return `<main class="shop-page"><div class="shop-heading">${breadcrumbs([{ label: category ? categoryName(category) : "Shop" }])}<span class="eyebrow">A home, considered</span><h1>${title}</h1><p>Thoughtful pieces for everyday rituals, quiet corners, and everything in between.</p></div><div class="shop-toolbar"><span>${found.length} ${found.length === 1 ? "piece" : "pieces"}</span><div class="toolbar-controls"><button class="filter-toggle" data-action="open-filters">${icon("sliders", 16)} Filters</button><label class="sort-control">Sort by <select aria-label="Sort products" data-filter="sort"><option value="featured" ${sort === "featured" ? "selected" : ""}>Featured</option><option value="newest" ${sort === "newest" ? "selected" : ""}>Newest</option><option value="price-low" ${sort === "price-low" ? "selected" : ""}>Price: low to high</option><option value="price-high" ${sort === "price-high" ? "selected" : ""}>Price: high to low</option></select>${icon("down", 15)}</label></div></div><div class="shop-layout"><aside class="filter-sidebar">${filters}</aside><div class="shop-results">${found.length ? productGrid(found) : emptyState("No pieces found.", "Try another search or clear your filters to explore the collection.", "/shop", "Clear filters")}</div></div><div class="drawer-backdrop filter-backdrop" ${state.mobileFilters ? "" : "hidden"}><aside class="filter-drawer" role="dialog" aria-modal="true" aria-label="Product filters"><div class="drawer-heading"><h2>Filters</h2><button class="icon-button" data-action="close-filters" aria-label="Close filters">${icon("close")}</button></div>${filters}<button class="button button-dark drawer-apply" data-action="close-filters">Show ${found.length} pieces</button></aside></div></main>`;
}
function productPage(product) {
  const saved = state.wishlist.includes(product.id);
  return `<main class="product-page page-section">${breadcrumbs([{ label: "Shop", to: "/shop" }, { label: categoryName(product.category), to: `/shop?category=${product.category}` }, { label: product.name }])}<div class="product-detail"><div class="product-gallery"><div class="gallery-main">${image(product.gallery[state.activeImage] || product.gallery[0], product.name)}</div><div class="gallery-thumbs">${product.gallery.map((src, i) => `<button data-action="gallery" data-index="${i}" class="${state.activeImage === i ? "selected" : ""}" aria-label="View product image ${i + 1}">${image(src)}</button>`).join("")}</div></div><section class="product-info"><span class="eyebrow">${esc(categoryName(product.category))}</span><h1>${esc(product.name)}</h1><div class="detail-price">${price(product.price)}</div><p class="detail-description">${esc(product.longDescription)}</p>${product.variants.length ? `<fieldset class="variant-field"><legend>Finish / option <span>${esc(state.productVariant || product.variants[0])}</span></legend><div class="variant-options">${product.variants.map((v) => `<button type="button" data-action="variant" data-value="${esc(v)}" class="${(state.productVariant || product.variants[0]) === v ? "chosen" : ""}" aria-pressed="${(state.productVariant || product.variants[0]) === v}">${esc(v)}</button>`).join("")}</div></fieldset>` : ""}<div class="stock-status"><span class="stock-dot"></span> Available in demo catalogue</div><div class="purchase-row"><div class="quantity-control"><button data-action="product-quantity" data-delta="-1" aria-label="Decrease quantity">${icon("minus", 15)}</button><span aria-live="polite">${state.productQuantity}</span><button data-action="product-quantity" data-delta="1" aria-label="Increase quantity">${icon("plus", 15)}</button></div><button class="button button-dark add-to-bag" data-action="add-product">${state.productAdded ? `${icon("check", 17)} Added to bag` : `Add to bag ${icon("arrow", 16)}`}</button><button class="icon-button detail-wishlist ${saved ? "saved" : ""}" data-action="wishlist" data-id="${product.id}" aria-label="${saved ? "Remove from" : "Add to"} wishlist" aria-pressed="${saved}">${icon("heart")}</button></div><p class="demo-disclaimer">Demo product information only. Pricing and availability are not live store data.</p><div class="spec-list"><details open><summary>Details ${icon("down", 16)}</summary><p>${esc(product.description)}</p><p><b>Dimensions</b> — ${esc(product.dimensions)}</p><p><b>Materials</b> — ${esc(product.materials)}</p></details><details><summary>Care ${icon("down", 16)}</summary><p>${esc(product.care)}</p></details><details><summary>Shipping & returns ${icon("down", 16)}</summary><p>Shipping and return policies are placeholders for this demo. See <a href="#/shipping">shipping information</a> and <a href="#/returns">returns information</a>.</p></details></div></section></div><section class="related-section">${sectionHeading("In the same spirit", "You may also like.", "", `/shop?category=${product.category}`)}${productGrid(products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4))}</section></main>`;
}
function wishlistPage() {
  const saved = products.filter((item) => state.wishlist.includes(item.id));
  return `<main class="standard-page page-section">${breadcrumbs([{ label: "Wishlist" }])}<div class="page-intro"><span class="eyebrow">Your considered list</span><h1>Saved for later.</h1><p>${saved.length} ${saved.length === 1 ? "piece" : "pieces"} you have your eye on.</p></div>${saved.length ? productGrid(saved) : emptyState("A little space for what you love.", "Save the pieces that catch your eye and come back to them whenever you like.")}</main>`;
}
function cartLines() {
  return state.cart.map((line) => ({ ...line, product: products.find((item) => item.id === line.productId) })).filter((line) => line.product);
}
function cartPage() {
  const lines = cartLines(), subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  return `<main class="standard-page page-section">${breadcrumbs([{ label: "Shopping bag" }])}<div class="page-intro"><span class="eyebrow">A good place to pause</span><h1>Your shopping bag.</h1><p>Demo prices and availability are not live store data.</p></div>${lines.length ? `<div class="cart-layout"><div class="cart-lines">${lines.map((line) => `<article class="cart-line"><a href="#/product/${line.product.slug}">${image(line.product.image, line.product.name)}</a><div class="cart-line-info"><a href="#/product/${line.product.slug}" class="product-name">${esc(line.product.name)}</a><span>${esc(categoryName(line.product.category))}${line.variant ? ` · ${esc(line.variant)}` : ""}</span><button class="remove-line" data-action="remove-line" data-key="${esc(line.key)}">Remove</button></div><div class="quantity-control"><button data-action="cart-quantity" data-key="${esc(line.key)}" data-delta="-1" aria-label="Decrease ${esc(line.product.name)} quantity">${icon("minus", 14)}</button><span>${line.quantity}</span><button data-action="cart-quantity" data-key="${esc(line.key)}" data-delta="1" aria-label="Increase ${esc(line.product.name)} quantity">${icon("plus", 14)}</button></div><strong>${price(line.product.price * line.quantity)}</strong></article>`).join("")}</div><aside class="order-summary"><span class="eyebrow">A small summary</span><h2>Order summary</h2><div><span>Subtotal</span><b>${price(subtotal)}</b></div><p>Shipping and applicable taxes are calculated by the store at checkout.</p><a class="button button-dark full-button" href="#/checkout">Continue to checkout ${icon("arrow", 16)}</a><a class="continue-link" href="#/shop">${icon("left", 15)} Continue shopping</a></aside></div>` : emptyState("Your bag is taking a quiet moment.", "There are no pieces here just yet. Explore the collection and find something that feels like home.")}</main>`;
}
function field(name, label, type = "text") {
  return `<label class="form-field"><span>${label}</span><input name="${name}" type="${type}" required><small class="field-error" data-error="${name}" hidden></small></label>`;
}
function checkoutPage() {
  const lines = cartLines(), subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  if (state.checkoutConfirmed) return `<main class="standard-page page-section"><div class="confirmation"><span class="confirmation-check">${icon("check")}</span><span class="eyebrow">Demo journey complete</span><h1>Thank you for exploring.</h1><p>This is a demonstration only. No order has been placed and no payment was collected.</p><a class="button button-dark" href="#/shop">Return to the collection ${icon("arrow", 16)}</a></div></main>`;
  if (!lines.length) return `<main class="standard-page page-section">${breadcrumbs([{ label: "Checkout" }])}<div class="page-intro"><span class="eyebrow">Demonstration checkout</span><h1>Checkout.</h1><p>This prototype does not submit orders or collect payments.</p></div>${emptyState("Your bag is empty.", "Add a piece to your bag before continuing.")}</main>`;
  return `<main class="standard-page page-section checkout-page">${breadcrumbs([{ label: "Shopping bag", to: "/cart" }, { label: "Demo checkout" }])}<div class="page-intro"><span class="eyebrow">Demonstration checkout</span><h1>A few details.</h1><p>This prototype does not take payment or submit a real order.</p></div><div class="checkout-layout"><form class="checkout-form" data-form="checkout" novalidate><div class="checkout-section"><h2>Contact</h2>${field("email", "Email address", "email")}${field("name", "Full name")}</div><div class="checkout-section"><h2>Delivery address</h2>${field("address", "Street address")}<div class="form-two">${field("city", "City")}${field("postal", "Postal code")}</div><label class="form-field"><span>Country / region</span><select name="country" required><option value="">Select a country</option><option>United States</option><option>United Kingdom</option><option>Canada</option><option>Australia</option><option>Other</option></select><small class="field-error" data-error="country" hidden></small></label><div class="delivery-placeholder"><span class="stock-dot"></span><span><b>Standard delivery</b><small>Placeholder option · final rates set by the store</small></span></div></div><div class="checkout-warning"><b>Demo only — no payment details requested.</b><span>A real checkout must be securely handled by WooCommerce and a supported payment gateway.</span></div><button class="button button-dark full-button">Review demo details ${icon("arrow", 16)}</button><a class="checkout-back" href="#/cart">${icon("left", 15)} Return to bag</a></form><aside class="checkout-summary"><span class="eyebrow">Your selection</span><h2>Order summary</h2>${lines.map((line) => `<div class="summary-line">${image(line.product.image)}<span>${esc(line.product.name)}<small>${line.variant ? `${esc(line.variant)} · ` : ""}Qty ${line.quantity}</small></span><b>${price(line.product.price * line.quantity)}</b></div>`).join("")}<div class="summary-total"><span>Subtotal</span><b>${price(subtotal)}</b></div><p>Taxes and shipping are not calculated in this local demo.</p></aside></div></main>`;
}
function storyPage() {
  return `<main class="story-page"><div class="story-hero">${image(imageUrl("photo-1616486338812-3dadae4b4ace", 1800), "A warm contemporary living room layered with natural materials")}<div class="story-hero-title"><span class="eyebrow">A point of view</span><h1>Living, with a little more <em>intention.</em></h1></div></div><section class="story-copy page-section"><span class="eyebrow">The VERDANT LIVING approach</span><h2>A home is made in the details.</h2><p>We believe the most meaningful spaces are not made all at once. They take shape through thoughtful choices: useful forms, natural textures, and objects that feel right in the rhythm of everyday life.</p><p>VERDANT LIVING is a considered edit of home and living essentials. From the kitchen table to a quiet corner, each piece is selected to bring function, ease, and a sense of beauty to the way we live.</p><a class="button button-dark" href="#/shop">Explore our collection ${icon("arrow", 16)}</a></section><section class="story-values">${valueItem("Form with purpose", "Design that earns its place in your home.")}${valueItem("Everyday rituals", "Thoughtful pieces for the moments in between.")}${valueItem("A considered edit", "A calm point of view, with room for your own.")}</section></main>`;
}
const faqItems = [
  ["How do I place an order?", "This storefront is a local demo. In a live store, checkout would be securely handed to the connected WooCommerce checkout."],
  ["Are the listed prices current?", "No. Product pricing and availability are sample data and are not connected to a live store."],
  ["How long does shipping take?", "Shipping options and timeframes have not been supplied. This information is a placeholder for the store owner to complete."],
  ["What is your returns policy?", "Returns details are not yet defined. Please see the placeholder returns page; the store owner must add and review the real policy."],
  ["Can I save products for later?", "Yes. The prototype wishlist is stored in this browser only and is not connected to a customer account."],
];
const policyContent = {
  shipping: ["Shipping information", "Shipping details are placeholders and must be completed by the store owner.", ["Delivery options", "Add the available delivery methods, delivery areas, estimated timeframes, and any restrictions."], ["Costs and timing", "Add accurate shipping charges, processing times, and delivery estimates before launch."], ["Questions", "Add the store's customer care email address and contact response expectations."]],
  returns: ["Returns information", "This page is a placeholder, not a live returns policy.", ["Return eligibility", "The store owner must define eligible products, return conditions, and the period for requesting a return."], ["How to request a return", "Add the correct returns process and customer support contact details."], ["Refunds and exchanges", "Explain applicable refund timing, exchange availability, and any exclusions after legal review."]],
  privacy: ["Privacy policy", "Placeholder for a store-specific privacy notice. Legal review is required before launch.", ["Information collected", "Describe the personal information collected by the live store and why it is needed."], ["How information is used", "Document store systems, processors, retention, customer rights, and applicable privacy law requirements."], ["Contact", "Add the business identity and privacy contact details."]],
  terms: ["Terms & conditions", "Placeholder terms for a future live store. Complete and review with qualified legal advice.", ["About these terms", "Add the legal business identity, applicable jurisdiction, and terms governing purchases."], ["Products and orders", "Define accurate terms for product descriptions, pricing, order acceptance, and cancellations."], ["Contact", "Add verified business contact details and a process for customer enquiries."]],
};
function contentPage(path) {
  if (path === "/our-story") return storyPage();
  if (path === "/wishlist") return wishlistPage();
  if (path === "/cart") return cartPage();
  if (path === "/checkout") return checkoutPage();
  if (path === "/contact") return `<main class="standard-page page-section">${breadcrumbs([{ label: "Contact" }])}<div class="split-page"><div class="page-intro"><span class="eyebrow">We’re here to help</span><h1>A note to us.</h1><p>Questions about a piece or the demo experience? Send a note using the form. This prototype does not deliver messages.</p><div class="contact-placeholder"><span class="eyebrow">Customer care</span><p>Contact email and business details to be supplied by store owner.</p></div></div><form class="contact-form" data-form="contact" novalidate>${field("contact-name", "Your name")}${field("contact-email", "Email address", "email")}<label class="form-field"><span>Your message</span><textarea name="message" rows="5" required></textarea></label><button class="button button-dark">Validate demo message ${icon("arrow", 16)}</button><small class="form-message" data-message aria-live="polite">Demo form only — no message will be saved or sent.</small></form></div></main>`;
  if (path === "/faq") return `<main class="standard-page page-section">${breadcrumbs([{ label: "FAQ" }])}<div class="page-intro"><span class="eyebrow">A few useful things</span><h1>Frequently asked.</h1><p>Answers for this storefront prototype.</p></div><div class="faq-list">${faqItems.map(([q, a]) => `<details><summary>${q}${icon("plus", 17)}</summary><p>${a}</p></details>`).join("")}</div></main>`;
  if (policyContent[path.slice(1)]) {
    const [title, intro, ...sections] = policyContent[path.slice(1)];
    return `<main class="standard-page page-section">${breadcrumbs([{ label: title }])}<div class="legal-page"><span class="eyebrow">Store information · needs owner review</span><h1>${title}.</h1><p class="legal-intro">${intro}</p>${sections.map(([heading, text]) => `<section><h2>${heading}</h2><p>${text}</p></section>`).join("")}<div class="policy-warning">Before this storefront is launched, replace this placeholder with accurate business information and complete legal review.</div></div></main>`;
  }
  return `<main class="standard-page page-section">${emptyState("This page wandered off.", "The page you’re looking for may have moved. Find your way back to the collection.", "/", "Return home")}</main>`;
}
function updateMetadata(path, params) {
  const item = path.startsWith("/product/") ? products.find((p) => p.slug === path.slice(9)) : null;
  const category = params.get("category"), query = params.get("q");
  let title = item ? `${item.name} | Verdant Living` : ({
    "/": "VERDANT LIVING — Elevate the Everyday",
    "/shop": query ? `Search: ${query} | Verdant Living` : category ? `${categoryName(category)} | Verdant Living` : "Shop | Verdant Living",
    "/wishlist": "Wishlist | Verdant Living", "/cart": "Shopping bag | Verdant Living",
    "/checkout": "Demo checkout | Verdant Living", "/our-story": "Our story | Verdant Living",
    "/contact": "Contact | Verdant Living", "/faq": "Frequently asked questions | Verdant Living",
    "/shipping": "Shipping information | Verdant Living", "/returns": "Returns information | Verdant Living",
    "/privacy": "Privacy policy | Verdant Living", "/terms": "Terms and conditions | Verdant Living",
  })[path] || "Page not found | Verdant Living";
  document.title = title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = item ? item.description : path === "/" ? "Thoughtfully chosen home essentials for a more beautiful everyday." : `${title.split("|")[0].trim()} at VERDANT LIVING. This is a demonstration storefront.`;
}
function render() {
  const raw = location.hash.slice(1) || "/";
  const parsed = new URL(raw, location.href);
  const path = decodeURIComponent(parsed.pathname.replace(/\/+$/, "") || "/");
  const params = parsed.searchParams;
  if (path !== "/shop") state.mobileFilters = false;
  updateMetadata(path, params);
  document.getElementById("header-root").innerHTML = headerTemplate();
  const main = path === "/" ? homePage() : path === "/shop" ? shopPage(path, params) :
    path.startsWith("/product/") ? (() => {
      const item = products.find((p) => p.slug === path.slice(9));
      if (!item) return contentPage("/not-found");
      if (!state.productVariant || !item.variants.includes(state.productVariant)) state.productVariant = item.variants[0] || "";
      return productPage(item);
    })() : contentPage(path);
  document.getElementById("app").innerHTML = main;
  document.getElementById("footer-root").innerHTML = footerTemplate();
  if (state.searchOpen) {
    const input = document.getElementById("product-search");
    input?.focus();
    input?.setSelectionRange(input.value.length, input.value.length);
  }
}
function updateShopParam(key, value) {
  const url = new URL(location.hash.slice(1) || "/shop", location.href);
  if (value) url.searchParams.set(key, value); else url.searchParams.delete(key);
  location.hash = `${url.pathname}${url.search}`;
}
document.addEventListener("click", (event) => {
  const actionElement = event.target.closest("[data-action]");
  if (!actionElement) return;
  const { action, id, key } = actionElement.dataset;
  if (action === "dismiss-announcement") { writeStorageValue("verdant-announcement-dismissed", "true"); render(); }
  else if (action === "toggle-menu") { state.menuOpen = !state.menuOpen; render(); }
  else if (action === "open-search") { state.searchOpen = true; state.searchQuery = ""; render(); }
  else if (action === "close-search" || (action === "backdrop-search" && event.target === actionElement)) { state.searchOpen = false; render(); }
  else if (action === "clear-search") { state.searchQuery = ""; render(); }
  else if (action === "wishlist") { toggleWishlist(id); render(); }
  else if (action === "quick-add") { addToCart(products.find((item) => item.id === id), 1, products.find((item) => item.id === id)?.variants[0] || ""); render(); }
  else if (action === "open-filters") { state.mobileFilters = true; render(); }
  else if (action === "close-filters") { state.mobileFilters = false; render(); }
  else if (action === "clear-filters") { location.hash = "/shop"; }
  else if (action === "gallery") { state.activeImage = Number(actionElement.dataset.index) || 0; render(); }
  else if (action === "variant") { state.productVariant = actionElement.dataset.value || ""; render(); }
  else if (action === "product-quantity") { state.productQuantity = Math.min(99, Math.max(1, state.productQuantity + Number(actionElement.dataset.delta))); render(); }
  else if (action === "add-product") {
    const slug = decodeURIComponent(location.hash.slice(1).split("?")[0]).slice(9);
    addToCart(products.find((item) => item.slug === slug), state.productQuantity, state.productVariant);
    state.productAdded = true; render();
  } else if (action === "remove-line") { state.cart = state.cart.filter((line) => line.key !== key); saveStorage("verdant-cart", state.cart); render(); }
  else if (action === "cart-quantity") {
    const line = state.cart.find((entry) => entry.key === key);
    if (line) line.quantity = Math.min(99, Math.max(0, line.quantity + Number(actionElement.dataset.delta)));
    state.cart = state.cart.filter((entry) => entry.quantity > 0);
    saveStorage("verdant-cart", state.cart); render();
  }
});
document.addEventListener("input", (event) => {
  if (event.target.id === "product-search") {
    const input = event.target, start = input.selectionStart, end = input.selectionEnd;
    state.searchQuery = input.value;
    render();
    const next = document.getElementById("product-search");
    next?.focus();
    if (next && start !== null && end !== null) next.setSelectionRange(start, end);
  }
});
document.addEventListener("change", (event) => {
  const filter = event.target.dataset.filter;
  if (filter === "sort") updateShopParam("sort", event.target.value === "featured" ? "" : event.target.value);
  if (filter === "category") updateShopParam("category", event.target.value);
  if (filter === "max") updateShopParam("max", event.target.value);
});
function showFormMessage(form, message, success = false) {
  const output = form.querySelector("[data-message]");
  if (output) { output.textContent = message; output.className = success ? "form-success" : "form-message"; }
}
function setFieldError(form, name, message) {
  const output = form.querySelector(`[data-error="${name}"]`);
  if (output) { output.textContent = message; output.hidden = !message; }
  const input = form.elements.namedItem(name);
  if (input) input.setAttribute("aria-invalid", String(Boolean(message)));
}
document.addEventListener("submit", (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement) || !form.dataset.form) return;
  event.preventDefault();
  const data = new FormData(form);
  if (form.dataset.form === "newsletter") {
    const email = String(data.get("email") || "");
    showFormMessage(form, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? "Email format checked. This demo did not store or send your signup."
      : "Please enter a valid email address.", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  } else if (form.dataset.form === "contact") {
    const email = String(data.get("contact-email") || ""), valid = String(data.get("contact-name") || "").trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && String(data.get("message") || "").trim();
    if (!valid) showFormMessage(form, "Please complete each field with a valid email address.");
    else { showFormMessage(form, "Your message passed demo validation, but it was not saved or sent.", true); form.reset(); }
  } else if (form.dataset.form === "checkout") {
    let valid = true;
    ["email", "name", "address", "city", "postal", "country"].forEach((name) => {
      const value = String(data.get(name) || "").trim();
      let message = value ? "" : "Please complete this field.";
      if (name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Enter a valid email address.";
      setFieldError(form, name, message);
      if (message) valid = false;
    });
    if (valid) { state.checkoutConfirmed = true; render(); window.scrollTo(0, 0); }
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && (state.searchOpen || state.menuOpen || state.mobileFilters)) {
    state.searchOpen = false; state.menuOpen = false; state.mobileFilters = false; render();
  }
});
window.addEventListener("hashchange", () => {
  state.menuOpen = false;
  state.searchOpen = false;
  state.checkoutConfirmed = false;
  state.productAdded = false;
  state.productQuantity = 1;
  state.activeImage = 0;
  state.productVariant = "";
  render();
  window.scrollTo(0, 0);
});
document.addEventListener("error", (event) => {
  const target = event.target;
  if (target instanceof HTMLImageElement && !target.dataset.fallbackApplied) {
    target.dataset.fallbackApplied = "true";
    target.src = fallbackImage;
  }
}, true);
render();
