// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import Schema from 'async-validator'

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }
  }

// Hide Console Warnings for async-validator used on AntD Forms. (see https://github.com/yiminghe/async-validator#how-to-avoid-global-warning)
Schema.warning = function () {}
