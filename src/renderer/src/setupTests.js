// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { expect, vi } from 'vitest';

// Mock matchMedia if needed (fixes issues in jsdom)
global.matchMedia = global.matchMedia || function () {
  return {
    matches: false,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  };
};

