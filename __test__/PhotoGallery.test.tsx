import React from "react";
import { render } from "@testing-library/react";

import PhotoGallery from "../dist/index";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<button>Hihi</button>);
  });
});
