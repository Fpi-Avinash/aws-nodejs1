import "@testing-library/jest-dom";
import * as dotenv from "dotenv";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

dotenv.config();
