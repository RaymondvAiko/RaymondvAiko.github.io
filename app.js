const fallbackContent = {
  zh: {
    brand: { name: "Raymond" },
    nav: { about: "关于", projects: "项目", blog: "博客", contact: "联系" },
    hero: {
      eyebrow: "个人主页 / 长期写作 / 项目记录",
      title: "你好，我是 Raymond",
      subtitle: "我在这里整理自己的工作、项目、思考和持续学习的轨迹。",
      primaryCta: "阅读博客",
      secondaryCta: "联系我",
      projectsCta: "了解项目"
    },
    profile: {
      label: "当前关注",
      image: {
        src: "assets/profile-placeholder.svg",
        alt: "个人主页视觉图"
      },
      focus: ["产品工程", "AI 工具", "写作系统", "长期主义"]
    },
    sections: {
      aboutKicker: "关于我",
      aboutTitle: "把复杂问题拆成可以长期推进的系统",
      projectsKicker: "项目与经历",
      projectsTitle: "一些值得被看见的工作",
      blogKicker: "博客",
      blogTitle: "把想法沉淀成可回看的文字",
      contactKicker: "联系",
      contactTitle: "欢迎交流想法、项目和机会"
    },
    projectsPage: {
      moreCta: "更多内容",
      title: "项目与经历",
      subtitle: "这里集中整理更多项目、实验、经历和长期维护的工作记录。",
      backCta: "返回首页",
      detailBackCta: "返回项目列表",
      detailFallbackTitle: "项目详情",
      detailFallbackBody: "暂时没有找到这个项目，稍后可以从项目列表重新进入。"
    },
    blogPage: {
      moreCta: "更多内容",
      title: "博客",
      subtitle: "这里集中整理更多文章、笔记和长期写作记录。",
      backCta: "返回首页"
    },
    about: {
      body: "这里可以放你的个人介绍、专业背景、兴趣方向和你希望别人记住你的关键词。首版先留出稳定结构，后续再逐步替换为真实经历、项目和文章。",
      metrics: [
        { value: "8+", label: "可替换为你的从业年限" },
        { value: "24", label: "可替换为代表项目数量" },
        { value: "∞", label: "持续学习与记录" },
        { value: "4", label: "可替换为你的核心方向" }
      ]
    },
    projects: [
      {
        id: "knowledge-system",
        title: "个人知识库系统",
        description: "一个用于收集、整理和复盘长期学习资料的工作流项目。",
        tags: ["知识管理", "自动化"],
        linkLabel: "查看项目",
        url: "#",
        period: "长期维护",
        role: "系统设计 / 内容整理",
        details: [
          "这个项目聚焦于把分散资料、阅读笔记和问题记录整理成可持续复用的知识系统。",
          "核心目标不是保存更多内容，而是让未来重新进入一个问题时更快找到上下文、判断依据和下一步动作。"
        ],
        highlights: ["统一资料入口", "标签与摘要结构", "定期复盘节奏"]
      },
      {
        id: "ai-writing",
        title: "AI 辅助写作实验",
        description: "探索如何把 AI 工具嵌入日常写作、研究和内容整理流程。",
        tags: ["AI", "写作"],
        linkLabel: "查看项目",
        url: "#",
        period: "实验项目",
        role: "流程设计 / 写作研究",
        details: [
          "这个项目记录 AI 工具在选题、资料整理、草稿生成和复盘中的不同使用方式。",
          "重点是保留人的判断与表达，让工具负责加速结构化工作，而不是替代核心思考。"
        ],
        highlights: ["写作流程拆解", "提示词模板", "输出质量复盘"]
      },
      {
        id: "product-experience",
        title: "产品体验改进记录",
        description: "记录从问题发现、方案设计到迭代验证的完整产品思考。",
        tags: ["产品", "体验"],
        linkLabel: "查看项目",
        url: "#",
        period: "案例记录",
        role: "产品分析 / 体验改进",
        details: [
          "这个项目用于沉淀产品体验观察，把零散的问题、假设和改进方案整理成可回看的案例。",
          "每条记录尽量保留发现问题的场景、判断逻辑和验证方式，方便之后复用经验。"
        ],
        highlights: ["问题定义", "方案比较", "迭代验证"]
      },
      {
        id: "open-tooling",
        title: "开源工具整理",
        description: "沉淀常用工具、脚本和协作流程，方便在新项目里快速复用。",
        tags: ["开源", "效率"],
        linkLabel: "查看项目",
        url: "#",
        period: "工具集合",
        role: "工具整理 / 自动化",
        details: [
          "这个项目整理日常工作中反复使用的脚本、命令和项目初始化流程。",
          "目标是减少重复配置，把高频操作沉淀成更稳定的工作起点。"
        ],
        highlights: ["常用脚本", "协作流程", "项目模板"]
      },
      {
        id: "personal-site",
        title: "跨平台个人站点",
        description: "围绕内容更新、移动端访问和长期发布体验搭建的个人站点实验。",
        tags: ["网站", "长期维护"],
        linkLabel: "查看项目",
        url: "#",
        period: "站点项目",
        role: "前端实现 / 内容架构",
        details: [
          "这个项目关注个人主页如何同时承担介绍、作品集、博客和长期归档的功能。",
          "首版用纯静态技术实现，确保部署简单、内容易改，并兼顾手机和桌面浏览体验。"
        ],
        highlights: ["响应式布局", "中英双语", "JSON 内容维护"]
      }
    ],
    blog: {
      allTags: "全部",
      empty: "暂时没有匹配的文章。",
      readMore: "阅读全文",
      posts: [
        {
          id: "building-a-home",
          title: "为什么需要一个长期维护的个人主页",
          date: "2026-05-23",
          tags: ["主页", "写作"],
          image: {
            src: "assets/blog/homepage-systems.svg",
            alt: "抽象的个人主页结构示意图"
          },
          summary: "个人主页不只是展示页面，也是一套让项目、思考和身份持续沉淀的容器。",
          body: [
            "一个长期主页的价值，在于它能把分散在社交平台、文档和聊天记录里的内容重新组织起来。",
            "首版不需要一次写完所有真实内容。先建立稳定结构，再用真实项目和文章持续替换，占位内容会自然退出舞台。"
          ]
        },
        {
          id: "notes-as-system",
          title: "把笔记当成系统，而不是仓库",
          date: "2026-04-18",
          tags: ["知识管理", "方法"],
          image: {
            src: "assets/blog/notes-system.svg",
            alt: "分层笔记与知识节点示意图"
          },
          summary: "好的笔记系统不追求囤积，而是帮助自己在未来更快重新进入问题。",
          body: [
            "笔记真正有用的时刻，通常不是保存那一刻，而是未来再次面对类似问题的时候。",
            "因此，标签、摘要和上下文比完整复制资料更重要。它们让知识变得可重新调用。"
          ]
        },
        {
          id: "ai-workflow",
          title: "AI 工具如何进入日常工作流",
          date: "2026-03-02",
          tags: ["AI", "工作流"],
          image: {
            src: "assets/blog/ai-workflow.svg",
            alt: "AI 工作流节点连接示意图"
          },
          summary: "把 AI 当成协作者，而不是按钮，可以更自然地嵌入研究、草拟和复盘。",
          body: [
            "AI 工具最适合处理开放问题中的结构化部分，比如拆解任务、生成备选方案和检查遗漏。",
            "更重要的是保留自己的判断，让工具承担速度，让人负责方向。"
          ]
        },
        {
          id: "small-systems",
          title: "小系统如何支持长期目标",
          date: "2026-02-14",
          tags: ["方法", "系统"],
          image: {
            src: "assets/blog/small-systems.svg",
            alt: "小系统支持长期目标的阶梯示意图"
          },
          summary: "长期目标不一定靠宏大计划推进，很多时候需要的是可重复的小系统。",
          body: [
            "真正能持续的目标，往往不是每天重新鼓起勇气，而是让下一步动作足够清晰、足够容易开始。",
            "小系统的意义在于降低启动成本，并让反馈自然出现。"
          ]
        },
        {
          id: "review-rhythm",
          title: "建立适合自己的复盘节奏",
          date: "2026-01-08",
          tags: ["复盘", "写作"],
          image: {
            src: "assets/blog/review-rhythm.svg",
            alt: "复盘节奏与循环记录示意图"
          },
          summary: "复盘不只是总结结果，也是重新校准方向和注意力的过程。",
          body: [
            "好的复盘不需要很长，但需要足够诚实。它应该回答什么有效、什么消耗过高、下一轮要如何调整。",
            "当复盘成为节奏，经验才更容易从事件变成判断。"
          ]
        }
      ]
    },
    contact: {
      links: [
        { label: "Email", value: "hello@example.com", url: "mailto:hello@example.com" },
        { label: "GitHub", value: "github.com/yourname", url: "https://github.com/" },
        { label: "LinkedIn", value: "linkedin.com/in/yourname", url: "https://www.linkedin.com/" }
      ]
    },
    footer: { note: "用静态 HTML/CSS/JS 构建，方便长期维护。" }
  },
  en: {
    brand: { name: "Raymond" },
    nav: { about: "About", projects: "Projects", blog: "Blog", contact: "Contact" },
    hero: {
      eyebrow: "Personal home / Long-form notes / Project log",
      title: "Hi, I am Raymond.",
      subtitle: "This is where I organize my work, projects, notes, and long-term learning.",
      primaryCta: "Read Blog",
      secondaryCta: "Contact Me",
      projectsCta: "Explore Projects"
    },
    profile: {
      label: "Current focus",
      image: {
        src: "assets/profile-placeholder.svg",
        alt: "Personal homepage visual"
      },
      focus: ["Product engineering", "AI tools", "Writing systems", "Long-term craft"]
    },
    sections: {
      aboutKicker: "About",
      aboutTitle: "Turning complex problems into systems that can keep moving.",
      projectsKicker: "Projects & Experience",
      projectsTitle: "Selected work worth keeping visible.",
      blogKicker: "Blog",
      blogTitle: "Thoughts shaped into notes worth revisiting.",
      contactKicker: "Contact",
      contactTitle: "Open to ideas, projects, and thoughtful conversations."
    },
    projectsPage: {
      moreCta: "More",
      title: "Projects & Experience",
      subtitle: "A fuller archive of projects, experiments, experience, and long-running work.",
      backCta: "Back home",
      detailBackCta: "Back to projects",
      detailFallbackTitle: "Project Detail",
      detailFallbackBody: "This project could not be found. You can return to the project list and open it again."
    },
    blogPage: {
      moreCta: "More",
      title: "Blog",
      subtitle: "A fuller archive of essays, notes, and long-running writing.",
      backCta: "Back home"
    },
    about: {
      body: "Use this section for your bio, background, interests, and the keywords you want people to remember. The first version keeps the structure stable so real work, projects, and essays can replace the placeholders over time.",
      metrics: [
        { value: "8+", label: "Replace with years of experience" },
        { value: "24", label: "Replace with featured projects" },
        { value: "∞", label: "Learning and writing in progress" },
        { value: "4", label: "Replace with core focus areas" }
      ]
    },
    projects: [
      {
        id: "knowledge-system",
        title: "Personal Knowledge System",
        description: "A workflow for collecting, organizing, and reviewing long-term learning material.",
        tags: ["Knowledge", "Automation"],
        linkLabel: "View project",
        url: "#",
        period: "Long-running",
        role: "System design / Content organization",
        details: [
          "This project focuses on turning scattered references, reading notes, and open questions into a reusable knowledge system.",
          "The goal is not to save more material. It is to make it faster to recover context, judgment, and next actions later."
        ],
        highlights: ["Unified source collection", "Tags and summaries", "Review rhythm"]
      },
      {
        id: "ai-writing",
        title: "AI Writing Experiments",
        description: "Exploring how AI tools can support daily writing, research, and synthesis.",
        tags: ["AI", "Writing"],
        linkLabel: "View project",
        url: "#",
        period: "Experiment",
        role: "Workflow design / Writing research",
        details: [
          "This project records different ways to use AI tools across ideation, research organization, drafting, and review.",
          "The emphasis is on keeping human judgment and voice in charge while using tools to speed up structured work."
        ],
        highlights: ["Writing workflow", "Prompt templates", "Output review"]
      },
      {
        id: "product-experience",
        title: "Product Experience Notes",
        description: "A record of product thinking from problem discovery to iterative validation.",
        tags: ["Product", "UX"],
        linkLabel: "View project",
        url: "#",
        period: "Case notes",
        role: "Product analysis / Experience improvement",
        details: [
          "This project captures product experience observations and turns scattered issues, hypotheses, and improvements into reusable cases.",
          "Each note keeps the context, reasoning, and validation path visible so the learning can be reused later."
        ],
        highlights: ["Problem framing", "Solution comparison", "Iterative validation"]
      },
      {
        id: "open-tooling",
        title: "Open Tooling Notes",
        description: "A collection of reusable tools, scripts, and collaboration patterns for new projects.",
        tags: ["Open source", "Productivity"],
        linkLabel: "View project",
        url: "#",
        period: "Tooling collection",
        role: "Tooling / Automation",
        details: [
          "This project organizes scripts, commands, and setup patterns that are repeatedly useful in daily work.",
          "The goal is to reduce repeated configuration and turn common actions into a more reliable starting point."
        ],
        highlights: ["Reusable scripts", "Collaboration patterns", "Project templates"]
      },
      {
        id: "personal-site",
        title: "Cross-Platform Personal Site",
        description: "A personal site experiment focused on content updates, mobile access, and long-term publishing.",
        tags: ["Website", "Maintenance"],
        linkLabel: "View project",
        url: "#",
        period: "Site project",
        role: "Frontend implementation / Content architecture",
        details: [
          "This project explores how a personal homepage can work as an introduction, portfolio, blog, and long-term archive at the same time.",
          "The first version uses plain static technology so deployment stays simple, content remains easy to edit, and mobile and desktop reading both feel comfortable."
        ],
        highlights: ["Responsive layout", "Bilingual content", "JSON content updates"]
      }
    ],
    blog: {
      allTags: "All",
      empty: "No posts match this filter yet.",
      readMore: "Read more",
      posts: [
        {
          id: "building-a-home",
          title: "Why a Long-Term Personal Home Matters",
          date: "2026-05-23",
          tags: ["Home", "Writing"],
          image: {
            src: "assets/blog/homepage-systems.svg",
            alt: "Abstract structure of a personal homepage"
          },
          summary: "A personal site is not only a profile. It is a durable container for projects, thinking, and identity.",
          body: [
            "The value of a long-term homepage is that it gathers what usually lives across social feeds, documents, and conversations.",
            "The first version does not need to be complete. Build the structure first, then let real projects and articles replace the placeholders over time."
          ]
        },
        {
          id: "notes-as-system",
          title: "Notes as a System, Not a Warehouse",
          date: "2026-04-18",
          tags: ["Knowledge", "Method"],
          image: {
            src: "assets/blog/notes-system.svg",
            alt: "Layered notes and knowledge nodes"
          },
          summary: "Useful notes are not about hoarding. They help you return to a problem faster in the future.",
          body: [
            "Notes usually become valuable later, when you face a similar question and need to rebuild context quickly.",
            "That makes tags, summaries, and source context more important than copying everything in full."
          ]
        },
        {
          id: "ai-workflow",
          title: "Bringing AI Tools Into Daily Workflows",
          date: "2026-03-02",
          tags: ["AI", "Workflow"],
          image: {
            src: "assets/blog/ai-workflow.svg",
            alt: "Connected nodes in an AI workflow"
          },
          summary: "Treating AI as a collaborator, not a button, makes it easier to use across research, drafting, and review.",
          body: [
            "AI tools are especially strong at structuring open-ended work: breaking down tasks, generating alternatives, and checking for gaps.",
            "The important part is keeping your judgment in the loop. Let the tool provide speed, and let the person hold direction."
          ]
        },
        {
          id: "small-systems",
          title: "How Small Systems Support Long-Term Goals",
          date: "2026-02-14",
          tags: ["Method", "Systems"],
          image: {
            src: "assets/blog/small-systems.svg",
            alt: "Small systems forming steps toward a long-term goal"
          },
          summary: "Long-term goals do not always need grand plans. They often need repeatable small systems.",
          body: [
            "Sustainable goals rarely depend on rebuilding motivation every day. They depend on making the next action clear and easy to start.",
            "Small systems reduce the cost of beginning and make useful feedback easier to notice."
          ]
        },
        {
          id: "review-rhythm",
          title: "Finding a Review Rhythm That Works",
          date: "2026-01-08",
          tags: ["Review", "Writing"],
          image: {
            src: "assets/blog/review-rhythm.svg",
            alt: "Circular review rhythm and notes"
          },
          summary: "Review is not only about summarizing outcomes. It also recalibrates direction and attention.",
          body: [
            "A useful review does not need to be long, but it does need to be honest. It should ask what worked, what cost too much, and what needs to change next.",
            "When review becomes a rhythm, experience is more likely to become judgment."
          ]
        }
      ]
    },
    contact: {
      links: [
        { label: "Email", value: "hello@example.com", url: "mailto:hello@example.com" },
        { label: "GitHub", value: "github.com/yourname", url: "https://github.com/" },
        { label: "LinkedIn", value: "linkedin.com/in/yourname", url: "https://www.linkedin.com/" }
      ]
    },
    footer: { note: "Built with static HTML/CSS/JS for simple long-term maintenance." }
  }
};

let content = fallbackContent;
let currentLang = getStoredLanguage() || "zh";
let activeTag = "all";

const selectors = {
  i18n: "[data-i18n]",
  focusList: "#focus-list",
  profileImage: ".profile-image",
  metrics: "#metrics",
  projects: "#project-grid",
  projectDetail: "#project-detail",
  tagFilter: "#tag-filter",
  blog: "#blog-grid",
  contacts: "#contact-links",
  dialog: "#article-dialog"
};

function getValue(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

function safeText(value, fallback = "") {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function getStoredLanguage() {
  try {
    const value = localStorage.getItem("preferredLanguage");
    return ["zh", "en"].includes(value) ? value : null;
  } catch (error) {
    return null;
  }
}

function setStoredLanguage(value) {
  try {
    localStorage.setItem("preferredLanguage", value);
  } catch (error) {
    // Some browsers block localStorage for file:// pages; switching should still work.
  }
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function createPostImage(post, className) {
  const image = post.image;
  if (!image?.src) return null;

  const element = document.createElement("img");
  element.className = className;
  element.src = image.src;
  element.alt = safeText(image.alt, post.title || "");
  element.loading = "lazy";
  return element;
}

async function loadContent() {
  if (location.protocol === "file:") return fallbackContent;

  try {
    const response = await fetch("data/content.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Content request failed: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn("Using fallback content because data/content.json could not be loaded.", error);
    return fallbackContent;
  }
}

function translateStaticText(langData) {
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll(selectors.i18n).forEach((node) => {
    const value = getValue(langData, node.dataset.i18n);
    node.textContent = safeText(value, node.textContent);
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLang);
  });
}

function renderList(containerSelector, items, renderer, emptyText) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.replaceChildren();

  if (!Array.isArray(items) || items.length === 0) {
    container.append(createElement("p", "empty-state", emptyText));
    return;
  }

  items.forEach((item) => container.append(renderer(item)));
}

function renderFocus(langData) {
  const profileImage = document.querySelector(selectors.profileImage);
  if (profileImage) {
    const image = langData.profile?.image || {};
    profileImage.src = safeText(image.src, profileImage.getAttribute("src") || "assets/profile-placeholder.svg");
    profileImage.alt = safeText(image.alt, profileImage.alt || "Profile visual");
  }

  renderList(
    selectors.focusList,
    langData.profile?.focus,
    (item) => createElement("li", "", item),
    ""
  );
}

function renderMetrics(langData) {
  renderList(
    selectors.metrics,
    langData.about?.metrics,
    (metric) => {
      const card = createElement("div", "metric");
      card.append(createElement("strong", "", safeText(metric.value, "-")));
      card.append(createElement("span", "", safeText(metric.label)));
      return card;
    },
    ""
  );
}

function renderProjects(langData) {
  const container = document.querySelector(selectors.projects);
  const limit = Number(container?.dataset.projectLimit || 0);
  const projects = limit > 0 ? (langData.projects || []).slice(0, limit) : langData.projects;

  renderList(
    selectors.projects,
    projects,
    (project) => {
      const card = createElement("article", "project-card");
      const meta = createElement("div", "project-meta");
      (project.tags || []).forEach((tag) => meta.append(createElement("span", "", tag)));

      const body = createElement("div");
      body.append(createElement("h3", "", safeText(project.title, "Untitled project")));
      body.append(createElement("p", "", safeText(project.description)));

      const url = getProjectUrl(project);
      const link = createElement("a", "project-link", safeText(project.linkLabel, "View"));
      link.href = url;
      if (isExternalUrl(url)) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }

      card.append(meta, body, link);
      return card;
    },
    langData.blog?.empty || "No items."
  );
}

function getProjectUrl(project) {
  const url = safeText(project.url, "#");
  if (url !== "#" && !url.startsWith("#")) return normalizeUrl(url);

  const id = safeText(project.id);
  return id ? `project.html?id=${encodeURIComponent(id)}` : "#";
}

function normalizeUrl(url) {
  const value = safeText(url, "#");
  if (!value || value === "-" || value === "#") return "#";
  if (value.startsWith("mailto:") || value.startsWith("/") || value.startsWith("./")) return value;
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value}`;
}

function isExternalUrl(url) {
  return /^https?:\/\//i.test(url);
}

function renderProjectDetail(langData) {
  const container = document.querySelector(selectors.projectDetail);
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = (langData.projects || []).find((item) => item.id === id);

  const title = document.querySelector("#project-detail-title");
  const summary = document.querySelector("#project-detail-summary");
  const tags = document.querySelector("#project-detail-tags");
  const meta = document.querySelector("#project-detail-meta");
  const body = document.querySelector("#project-detail-body");
  const highlights = document.querySelector("#project-detail-highlights");

  tags.replaceChildren();
  meta.replaceChildren();
  body.replaceChildren();
  highlights.replaceChildren();

  if (!project) {
    title.textContent = langData.projectsPage?.detailFallbackTitle || "Project Detail";
    summary.textContent = langData.projectsPage?.detailFallbackBody || "";
    return;
  }

  document.title = `${project.title} | Raymond`;
  title.textContent = safeText(project.title, "Project Detail");
  summary.textContent = safeText(project.description);

  (project.tags || []).forEach((tag) => tags.append(createElement("span", "", tag)));
  [project.period, project.role].filter(Boolean).forEach((item) => {
    meta.append(createElement("div", "metric", item));
  });
  (project.details || [project.description]).forEach((paragraph) => {
    body.append(createElement("p", "", paragraph));
  });
  (project.highlights || []).forEach((item) => {
    const card = createElement("div", "project-card");
    card.append(createElement("h3", "", item));
    highlights.append(card);
  });
}

function getBlogTags(posts, allLabel) {
  const tags = new Set();
  posts.forEach((post) => (post.tags || []).forEach((tag) => tags.add(tag)));
  return [{ id: "all", label: allLabel }, ...Array.from(tags).map((tag) => ({ id: tag, label: tag }))];
}

function getVisiblePosts(langData) {
  const container = document.querySelector(selectors.blog);
  const limit = Number(container?.dataset.blogLimit || 0);
  const posts = langData.blog?.posts || [];
  return limit > 0 ? posts.slice(0, limit) : posts;
}

function renderTagFilter(langData) {
  const container = document.querySelector(selectors.tagFilter);
  if (!container) return;
  const posts = getVisiblePosts(langData);
  const tags = getBlogTags(posts, langData.blog?.allTags || "All");

  if (activeTag !== "all" && !tags.some((tag) => tag.id === activeTag)) {
    activeTag = "all";
  }

  container.replaceChildren();
  tags.forEach((tag) => {
    const button = createElement("button", "", tag.label);
    button.type = "button";
    button.classList.toggle("is-active", tag.id === activeTag);
    button.addEventListener("click", () => {
      activeTag = tag.id;
      render();
    });
    container.append(button);
  });
}

function renderBlog(langData) {
  const posts = getVisiblePosts(langData);
  const filtered = activeTag === "all"
    ? posts
    : posts.filter((post) => (post.tags || []).includes(activeTag));

  renderList(
    selectors.blog,
    filtered,
    (post) => {
      const card = createElement("article", "blog-card");
      const button = document.createElement("button");
      button.type = "button";
      button.addEventListener("click", () => openArticle(post));

      const image = createPostImage(post, "blog-card-image");
      const time = createElement("time", "", safeText(post.date));
      time.dateTime = safeText(post.date);
      if (image) button.append(image);
      button.append(time);
      button.append(createElement("h3", "", safeText(post.title, "Untitled post")));
      button.append(createElement("p", "", safeText(post.summary)));

      const linkText = createElement("span", "project-link", langData.blog?.readMore || "Read more");
      button.append(linkText);
      card.append(button);
      return card;
    },
    langData.blog?.empty || "No posts."
  );
}

function renderContacts(langData) {
  renderList(
    selectors.contacts,
    langData.contact?.links,
    (linkItem) => {
      const link = createElement("a", "contact-link");
      const url = normalizeUrl(linkItem.url);
      link.href = url;
      if (url === "#") {
        link.setAttribute("aria-disabled", "true");
        link.tabIndex = -1;
      }
      if (isExternalUrl(url)) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      link.append(createElement("span", "", safeText(linkItem.label)));
      link.append(createElement("span", "", safeText(linkItem.value)));
      return link;
    },
    ""
  );
}

function openArticle(post) {
  const dialog = document.querySelector(selectors.dialog);
  const cover = document.querySelector("#article-cover");
  document.querySelector("#article-meta").textContent = safeText(post.date);
  document.querySelector("#article-title").textContent = safeText(post.title, "Untitled post");

  if (cover) {
    if (post.image?.src) {
      cover.src = post.image.src;
      cover.alt = safeText(post.image.alt, post.title || "");
      cover.hidden = false;
    } else {
      cover.removeAttribute("src");
      cover.alt = "";
      cover.hidden = true;
    }
  }

  const tags = document.querySelector("#article-tags");
  tags.replaceChildren();
  (post.tags || []).forEach((tag) => tags.append(createElement("span", "", tag)));

  const body = document.querySelector("#article-body");
  body.replaceChildren();
  (post.body || [post.summary]).forEach((paragraph) => body.append(createElement("p", "", paragraph)));

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function render() {
  const langData = content[currentLang] || content.zh || fallbackContent.zh;
  translateStaticText(langData);
  renderFocus(langData);
  renderMetrics(langData);
  renderProjects(langData);
  renderProjectDetail(langData);
  renderTagFilter(langData);
  renderBlog(langData);
  renderContacts(langData);
}

function setupInteractions() {
  const footerYear = document.querySelector("#footer-year");
  if (footerYear) footerYear.textContent = `© ${new Date().getFullYear()}`;

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => {
      currentLang = button.dataset.lang;
      setStoredLanguage(currentLang);
      activeTag = "all";
      render();
    });
  });

  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector("#site-nav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.dataset.open !== "true";
      siteNav.dataset.open = String(isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (siteNav && navToggle) {
        siteNav.dataset.open = "false";
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  const dialog = document.querySelector(selectors.dialog);
  const dialogClose = document.querySelector(".dialog-close");
  if (dialog && dialogClose) {
    dialogClose.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  content = await loadContent();
  setupInteractions();
  render();
});
