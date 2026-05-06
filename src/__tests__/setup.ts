import "@testing-library/jest-dom";
import { vi } from "vitest";
import React from "react";

// Mock framer-motion — evita erros de browser API em ambiente jsdom
vi.mock("framer-motion", () => {
  const createMotion = (tag: string) =>
    // eslint-disable-next-line react/display-name
    React.forwardRef(
      (
        {
          children,
          // strip framer-specific props so they don't land on DOM elements
          initial: _i,
          animate: _a,
          exit: _e,
          variants: _v,
          whileHover: _wh,
          whileInView: _wiv,
          viewport: _vp,
          transition: _t,
          ...props
        }: React.PropsWithChildren<Record<string, unknown>>,
        ref: React.Ref<unknown>
      ) =>
        React.createElement(tag, { ...props, ref }, children)
    );

  return {
    motion: new Proxy(
      {},
      { get: (_, prop) => createMotion(prop as string) }
    ),
    AnimatePresence: ({ children }: React.PropsWithChildren) => children,
  };
});

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => "/",
}));

// Stub window.scrollTo e scrollY para testes do Header
Object.defineProperty(window, "scrollY", { writable: true, value: 0 });
Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: vi.fn(),
});
