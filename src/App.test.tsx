import { render, screen, act } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";

let task1 = ["this is a task", ["tag1", "tag2", "tag"], "description"];
let task2 = ["is this a task", ["tag1", "tag2", "gat", "tag"], "description2"];

describe("home page render", () => {
  test("add button render", () => {
    render(<App />);
    const addbtn = screen.getByRole("button", { name: /add/i });
    expect(addbtn).toBeInTheDocument();
  });

  test("search field render", () => {
    render(<App />);
    const searchField = screen.getByRole("textbox");
    expect(searchField).toBeInTheDocument();
  });
});
