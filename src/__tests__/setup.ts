import "@testing-library/jest-dom";
import React from "react";

// Mock framer-motion to keep unit tests focused on rendered behavior.
jest.mock("framer-motion", () => {
  const createMotion = (tag: string) =>
    // eslint-disable-next-line react/display-name
    React.forwardRef(
      (
        {
          children,
          initial: _initial,
          animate: _animate,
          exit: _exit,
          variants: _variants,
          whileHover: _whileHover,
          whileInView: _whileInView,
          viewport: _viewport,
          transition: _transition,
          ...props
        }: React.PropsWithChildren<Record<string, unknown>>,
        ref: React.Ref<unknown>
      ) => React.createElement(tag, { ...props, ref }, children)
    );

  return {
    motion: new Proxy({}, { get: (_, prop) => createMotion(prop as string) }),
    AnimatePresence: ({ children }: React.PropsWithChildren) => children,
  };
});

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn(), replace: jest.fn(), prefetch: jest.fn() }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => "/",
}));

Object.defineProperty(window, "scrollY", { writable: true, value: 0 });
Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: jest.fn(),
});
