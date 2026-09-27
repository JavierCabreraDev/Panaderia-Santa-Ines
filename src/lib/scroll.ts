export function smoothScrollTo(href: string) {
  document.getElementById(href.slice(1))?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
