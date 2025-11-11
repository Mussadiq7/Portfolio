import { c as createComponent, a as createAstro, b as addAttribute, r as renderComponent, m as maybeRenderHead, d as renderTemplate } from '../chunks/astro/server_DjwVnTrJ.mjs';
import 'kleur/colors';
import 'html-escaper';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`import Header from "../components/Header.astro";
import Hero from "../components/Hero.astro";
import About from "../components/About.astro";
import Projects from "../components/Projects.astro";
import Experience from "../components/Experience.astro";
import Education from "../components/Education.astro";
import Footer from "../components/Footer.astro";
import ${siteConfig} from "../config";
import "../styles/global.css";
<meta charset="utf-8"> <link rel="icon" type="image/svg+xml" href="/favicon.svg"> <meta name="viewport" content="width=device-width"> <meta name="generator"${addAttribute(Astro2.generator, "content")}> <meta name="description"${addAttribute(siteConfig.description, "content")}> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"> <title>${siteConfig.name} - ${siteConfig.title}</title> ${renderComponent($$result, "Header", Header, {})} ${maybeRenderHead()}<section> ${renderComponent($$result, "Hero", Hero, {})} ${renderComponent($$result, "About", About, {})} ${renderComponent($$result, "Projects", Projects, {})} ${renderComponent($$result, "Experience", Experience, {})} ${renderComponent($$result, "Education", Education, {})} </section> ${renderComponent($$result, "Footer", Footer, {})} `;
}, "C:/Users/mussa/Downloads/devportfolio-master/devportfolio-master/src/pages/index.astro", void 0);

const $$file = "C:/Users/mussa/Downloads/devportfolio-master/devportfolio-master/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
