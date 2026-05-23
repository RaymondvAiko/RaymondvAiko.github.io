let content = null;
let currentLang = "zh";
let currentSection = "overview";
let dirty = false;

const form = document.querySelector("#editor-form");
const saveButton = document.querySelector("#save-button");
const reloadButton = document.querySelector("#reload-button");
const saveState = document.querySelector("#save-state");
const panelTitle = document.querySelector("#panel-title");
const panelKicker = document.querySelector("#panel-kicker");
const panelNote = document.querySelector("#panel-note");

const sectionMeta = {
  overview: ["Overview", "Quick checks before editing"],
  homepage: ["Homepage", "Hero, profile, sections, and about copy"],
  projects: ["Projects", "Cards and detail pages"],
  blog: ["Blog", "Posts, images, tags, and article bodies"],
  contact: ["Contact", "Public contact links"],
  json: ["Raw JSON", "Advanced direct editing"]
};

const fieldLabels = {
  "brand.name": "Brand name",
  "hero.eyebrow": "Hero eyebrow",
  "hero.title": "Hero title",
  "hero.subtitle": "Hero subtitle",
  "hero.projectsCta": "Projects CTA",
  "hero.primaryCta": "Blog CTA",
  "hero.secondaryCta": "Contact CTA",
  "profile.label": "Profile label",
  "profile.image.src": "Profile image path",
  "profile.image.alt": "Profile image alt text",
  "sections.aboutKicker": "About kicker",
  "sections.aboutTitle": "About title",
  "sections.projectsKicker": "Projects kicker",
  "sections.projectsTitle": "Projects title",
  "sections.blogKicker": "Blog kicker",
  "sections.blogTitle": "Blog title",
  "sections.contactKicker": "Contact kicker",
  "sections.contactTitle": "Contact title",
  "about.body": "About body",
  "projectsPage.moreCta": "More projects CTA",
  "projectsPage.title": "Projects page title",
  "projectsPage.subtitle": "Projects page subtitle",
  "projectsPage.backCta": "Projects back CTA",
  "projectsPage.detailBackCta": "Detail back CTA",
  "projectsPage.detailFallbackTitle": "Detail fallback title",
  "projectsPage.detailFallbackBody": "Detail fallback body",
  "blogPage.moreCta": "More blog CTA",
  "blogPage.title": "Blog page title",
  "blogPage.subtitle": "Blog page subtitle",
  "blogPage.backCta": "Blog back CTA",
  "blog.allTags": "All tags label",
  "blog.empty": "Empty blog text",
  "blog.readMore": "Read more label",
  "footer.note": "Footer note"
};

function langData() {
  return content[currentLang];
}

function getPath(path) {
  return path.split(".").reduce((value, key) => value?.[key], langData());
}

function setPath(path, value) {
  const parts = path.split(".");
  const last = parts.pop();
  const target = parts.reduce((object, key) => {
    object[key] = object[key] || {};
    return object[key];
  }, langData());
  target[last] = value;
}

function setStatus(message, isError = false) {
  saveState.textContent = message;
  saveState.style.color = isError ? "var(--danger)" : "";
}

function markDirty() {
  dirty = true;
  setStatus("Unsaved changes");
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function makeField(label, value, onInput, options = {}) {
  const wrapper = createElement("label", `field${options.full ? " full" : ""}`);
  wrapper.append(createElement("span", "", label));

  const input = document.createElement(options.multiline ? "textarea" : "input");
  input.value = value ?? "";
  input.addEventListener("input", () => {
    onInput(input.value);
    markDirty();
  });
  wrapper.append(input);
  return wrapper;
}

function makePathField(path, options = {}) {
  return makeField(fieldLabels[path] || path, getPath(path), (value) => setPath(path, value), options);
}

function makeArrayField(label, values, onInput, options = {}) {
  return makeField(label, (values || []).join("\n"), (value) => {
    onInput(value.split("\n").map((item) => item.trim()).filter(Boolean));
  }, { ...options, multiline: true, full: true });
}

function makeSection(title, children) {
  const section = createElement("section", "section-card");
  section.append(createElement("h2", "", title));
  const grid = createElement("div", "field-grid");
  children.forEach((child) => grid.append(child));
  section.append(grid);
  return section;
}

function ensureProfileImage(data) {
  data.profile = data.profile || {};
  data.profile.image = data.profile.image || {
    src: "assets/profile-placeholder.svg",
    alt: currentLang === "zh" ? "个人主页视觉图" : "Personal homepage visual"
  };
  return data.profile.image;
}

function renderProfileImageSection(data) {
  const image = ensureProfileImage(data);
  const section = createElement("section", "section-card");
  section.append(createElement("h2", "", "Profile image"));

  const media = createElement("div", "media-editor");
  const preview = document.createElement("img");
  preview.src = image.src || "assets/profile-placeholder.svg";
  preview.alt = image.alt || "Profile image preview";
  preview.loading = "lazy";

  const fields = createElement("div", "field-grid");
  fields.append(
    makeField("Image path", image.src, (value) => {
      image.src = value;
      preview.src = value || "assets/profile-placeholder.svg";
    }),
    makeField("Alt text", image.alt, (value) => {
      image.alt = value;
      preview.alt = value || "Profile image preview";
    })
  );

  media.append(preview, fields);
  section.append(media);
  return section;
}

function makeItemHeader(title, onDelete) {
  const header = createElement("div", "item-header");
  header.append(createElement("p", "item-title", title));
  const button = createElement("button", "small-button danger", "Delete");
  button.type = "button";
  button.addEventListener("click", () => {
    onDelete();
    markDirty();
    render();
  });
  header.append(button);
  return header;
}

function setPanel() {
  const [title, note] = sectionMeta[currentSection];
  panelTitle.textContent = title;
  panelNote.textContent = note;
  panelKicker.textContent = currentLang === "zh" ? "Editing Chinese content" : "Editing English content";
  if (currentSection === "json") {
    panelKicker.textContent = "Editing complete content file";
  }
}

function renderOverview() {
  const data = langData();
  const wrapper = createElement("div", "form-grid");
  const overview = createElement("div", "overview-grid");
  const items = [
    ["Projects", data.projects?.length || 0],
    ["Posts", data.blog?.posts?.length || 0],
    ["Contact links", data.contact?.links?.length || 0]
  ];

  items.forEach(([label, value]) => {
    const card = document.createElement("article");
    card.append(createElement("span", "", label));
    card.append(createElement("strong", "", value));
    overview.append(card);
  });

  wrapper.append(overview);
  wrapper.append(makeSection("Main labels", [
    makePathField("brand.name"),
    makePathField("footer.note", { full: true }),
    makeArrayField("Profile focus items", data.profile?.focus, (value) => {
      data.profile.focus = value;
    })
  ]));
  wrapper.append(renderProfileImageSection(data));
  return wrapper;
}

function renderHomepage() {
  const data = langData();
  const wrapper = createElement("div", "form-grid");
  wrapper.append(makeSection("Hero", [
    makePathField("hero.eyebrow", { full: true }),
    makePathField("hero.title"),
    makePathField("hero.subtitle", { full: true, multiline: true }),
    makePathField("hero.projectsCta"),
    makePathField("hero.primaryCta"),
    makePathField("hero.secondaryCta")
  ]));
  wrapper.append(makeSection("Section headings", [
    makePathField("sections.aboutKicker"),
    makePathField("sections.aboutTitle"),
    makePathField("sections.projectsKicker"),
    makePathField("sections.projectsTitle"),
    makePathField("sections.blogKicker"),
    makePathField("sections.blogTitle"),
    makePathField("sections.contactKicker"),
    makePathField("sections.contactTitle")
  ]));
  wrapper.append(makeSection("About", [
    makePathField("profile.label"),
    makePathField("about.body", { full: true, multiline: true }),
    makeArrayField("Profile focus items", data.profile?.focus, (value) => {
      data.profile.focus = value;
    })
  ]));
  wrapper.append(renderProfileImageSection(data));
  wrapper.append(renderMetrics(data));
  wrapper.append(makeSection("Archive pages", [
    makePathField("projectsPage.moreCta"),
    makePathField("projectsPage.title"),
    makePathField("projectsPage.subtitle", { full: true, multiline: true }),
    makePathField("projectsPage.backCta"),
    makePathField("projectsPage.detailBackCta"),
    makePathField("projectsPage.detailFallbackTitle"),
    makePathField("projectsPage.detailFallbackBody", { full: true, multiline: true }),
    makePathField("blogPage.moreCta"),
    makePathField("blogPage.title"),
    makePathField("blogPage.subtitle", { full: true, multiline: true }),
    makePathField("blogPage.backCta")
  ]));
  return wrapper;
}

function renderMetrics(data) {
  const section = createElement("section", "section-card");
  section.append(createElement("h2", "", "About metrics"));
  const list = createElement("div", "card-list");

  (data.about.metrics || []).forEach((metric, index) => {
    const card = createElement("div", "item-card");
    card.append(makeItemHeader(`Metric ${index + 1}`, () => data.about.metrics.splice(index, 1)));
    const grid = createElement("div", "field-grid");
    grid.append(
      makeField("Value", metric.value, (value) => {
        metric.value = value;
      }),
      makeField("Label", metric.label, (value) => {
        metric.label = value;
      })
    );
    card.append(grid);
    list.append(card);
  });

  const addButton = createElement("button", "small-button add", "Add metric");
  addButton.type = "button";
  addButton.addEventListener("click", () => {
    data.about.metrics.push({ value: "1", label: "New metric" });
    markDirty();
    render();
  });

  section.append(list, addButton);
  return section;
}

function renderProjects() {
  const data = langData();
  const wrapper = createElement("div", "form-grid");
  const list = createElement("div", "card-list");

  (data.projects || []).forEach((project, index) => {
    const card = createElement("article", "item-card");
    card.append(makeItemHeader(project.title || `Project ${index + 1}`, () => data.projects.splice(index, 1)));

    const grid = createElement("div", "field-grid");
    grid.append(
      makeField("ID", project.id, (value) => {
        project.id = value.trim();
      }),
      makeField("Title", project.title, (value) => {
        project.title = value;
      }),
      makeField("Description", project.description, (value) => {
        project.description = value;
      }, { full: true, multiline: true }),
      makeArrayField("Tags", project.tags, (value) => {
        project.tags = value;
      }),
      makeField("Link label", project.linkLabel, (value) => {
        project.linkLabel = value;
      }),
      makeField("External URL or #", project.url, (value) => {
        project.url = value;
      }),
      makeField("Period", project.period, (value) => {
        project.period = value;
      }),
      makeField("Role", project.role, (value) => {
        project.role = value;
      }),
      makeArrayField("Detail paragraphs", project.details, (value) => {
        project.details = value;
      }),
      makeArrayField("Highlights", project.highlights, (value) => {
        project.highlights = value;
      })
    );
    card.append(grid);
    list.append(card);
  });

  const addButton = createElement("button", "small-button add", "Add project");
  addButton.type = "button";
  addButton.addEventListener("click", () => {
    data.projects.push({
      id: `project-${data.projects.length + 1}`,
      title: "New project",
      description: "Project description.",
      tags: ["Tag"],
      linkLabel: currentLang === "zh" ? "查看项目" : "View project",
      url: "#",
      period: "",
      role: "",
      details: ["Project detail paragraph."],
      highlights: ["Highlight"]
    });
    markDirty();
    render();
  });

  wrapper.append(list, addButton);
  return wrapper;
}

function renderBlog() {
  const data = langData();
  const wrapper = createElement("div", "form-grid");
  wrapper.append(makeSection("Blog labels", [
    makePathField("blog.allTags"),
    makePathField("blog.empty"),
    makePathField("blog.readMore")
  ]));

  const list = createElement("div", "card-list");
  (data.blog.posts || []).forEach((post, index) => {
    const card = createElement("article", "item-card");
    card.append(makeItemHeader(post.title || `Post ${index + 1}`, () => data.blog.posts.splice(index, 1)));

    post.image = post.image || { src: "", alt: "" };
    const grid = createElement("div", "field-grid");
    grid.append(
      makeField("ID", post.id, (value) => {
        post.id = value.trim();
      }),
      makeField("Title", post.title, (value) => {
        post.title = value;
      }),
      makeField("Date", post.date, (value) => {
        post.date = value;
      }),
      makeArrayField("Tags", post.tags, (value) => {
        post.tags = value;
      }),
      makeField("Image path", post.image.src, (value) => {
        post.image.src = value;
      }),
      makeField("Image alt", post.image.alt, (value) => {
        post.image.alt = value;
      }),
      makeField("Summary", post.summary, (value) => {
        post.summary = value;
      }, { full: true, multiline: true }),
      makeArrayField("Body paragraphs", post.body, (value) => {
        post.body = value;
      })
    );
    card.append(grid);
    list.append(card);
  });

  const addButton = createElement("button", "small-button add", "Add post");
  addButton.type = "button";
  addButton.addEventListener("click", () => {
    data.blog.posts.push({
      id: `post-${data.blog.posts.length + 1}`,
      title: "New post",
      date: new Date().toISOString().slice(0, 10),
      tags: ["Tag"],
      image: { src: "", alt: "" },
      summary: "Post summary.",
      body: ["Post body paragraph."]
    });
    markDirty();
    render();
  });

  wrapper.append(list, addButton);
  return wrapper;
}

function renderContact() {
  const data = langData();
  const wrapper = createElement("div", "form-grid");
  const list = createElement("div", "card-list");

  (data.contact.links || []).forEach((link, index) => {
    const card = createElement("article", "item-card");
    card.append(makeItemHeader(link.label || `Link ${index + 1}`, () => data.contact.links.splice(index, 1)));

    const grid = createElement("div", "field-grid");
    grid.append(
      makeField("Label", link.label, (value) => {
        link.label = value;
      }),
      makeField("Visible value", link.value, (value) => {
        link.value = value;
      }),
      makeField("URL", link.url, (value) => {
        link.url = value;
      }, { full: true })
    );
    card.append(grid);
    list.append(card);
  });

  const addButton = createElement("button", "small-button add", "Add contact link");
  addButton.type = "button";
  addButton.addEventListener("click", () => {
    data.contact.links.push({ label: "Link", value: "example.com", url: "https://example.com" });
    markDirty();
    render();
  });

  wrapper.append(list, addButton);
  return wrapper;
}

function renderJson() {
  const wrapper = createElement("div", "form-grid");
  const editor = document.createElement("textarea");
  editor.className = "raw-editor";
  editor.value = JSON.stringify(content, null, 2);
  editor.spellcheck = false;
  editor.addEventListener("input", () => {
    try {
      content = JSON.parse(editor.value);
      dirty = true;
      setStatus("Raw JSON applied");
    } catch (error) {
      setStatus(`Invalid JSON: ${error.message}`, true);
    }
  });
  wrapper.append(editor);
  wrapper.append(createElement("p", "error-text", "Raw JSON changes apply as soon as the text is valid JSON."));
  return wrapper;
}

function render() {
  if (!content) return;
  setPanel();
  form.replaceChildren();

  const renderers = {
    overview: renderOverview,
    homepage: renderHomepage,
    projects: renderProjects,
    blog: renderBlog,
    contact: renderContact,
    json: renderJson
  };

  form.append(renderers[currentSection]());
  document.querySelectorAll("[data-lang-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langTab === currentLang);
  });
  document.querySelectorAll("[data-section]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.section === currentSection);
  });
}

async function loadContent() {
  setStatus("Loading content...");
  const response = await fetch("/api/content", { cache: "no-store" });
  if (!response.ok) throw new Error(`Could not load content: ${response.status}`);
  content = await response.json();
  dirty = false;
  setStatus("Loaded data/content.json");
  render();
}

async function saveContent() {
  if (!content) return;
  saveButton.disabled = true;
  setStatus("Saving...");

  try {
    const response = await fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content)
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Save failed.");
    dirty = false;
    setStatus(`Saved ${new Date(result.savedAt).toLocaleTimeString()}`);
  } catch (error) {
    setStatus(error.message, true);
  } finally {
    saveButton.disabled = false;
  }
}

document.querySelectorAll("[data-lang-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.langTab;
    render();
  });
});

document.querySelectorAll("[data-section]").forEach((button) => {
  button.addEventListener("click", () => {
    currentSection = button.dataset.section;
    render();
  });
});

saveButton.addEventListener("click", saveContent);
reloadButton.addEventListener("click", loadContent);

window.addEventListener("beforeunload", (event) => {
  if (!dirty) return;
  event.preventDefault();
  event.returnValue = "";
});

loadContent().catch((error) => {
  form.replaceChildren(createElement("p", "error-text", error.message));
  setStatus("Start with: node local-admin-server.js", true);
});
