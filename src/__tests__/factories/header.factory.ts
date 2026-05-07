export function makeHeaderDesktopLinks() {
  return [
    ["header-link-home", "#top"],
    ["header-link-services", "#servicos"],
    ["header-link-process", "#processo"],
    ["header-link-about", "#sobre"],
    ["header-link-contact", "#contato"],
  ] as const;
}

export function makeScrollTarget(selector: string, top: number) {
  const target = document.createElement("section");
  target.id = selector.replace("#", "");
  jest.spyOn(target, "getBoundingClientRect").mockReturnValue({
    top,
    bottom: top,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    x: 0,
    y: top,
    toJSON: () => ({}),
  } as DOMRect);
  document.body.appendChild(target);

  return target;
}
