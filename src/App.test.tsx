import { render, screen, act } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";

describe("render correctly", () => {
  test("form input render", () => {
    render(<App />);
    const inputTodoElement = screen.getByRole("textbox");
    expect(inputTodoElement).toBeInTheDocument();
  });
  test("add button render", () => {
    render(<App />);
    const addbtnElement = screen.getByRole("button", { name: /add/i });
    expect(addbtnElement).toBeInTheDocument();
  });
});

describe("edit page render correctly", () => {
  test("trash and delete btn render correctly", async () => {
    render(<App />);
    const inputTodoElement = screen.getByRole("textbox");
    await act(() => user.type(inputTodoElement, "learn react"));
    const addbtnElement = screen.getByRole("button", { name: /add/i });
    await act(() => user.click(addbtnElement));
    const trashIcon = screen.getByRole("img", { name: /learn react_trash/i });
    expect(trashIcon).toBeInTheDocument();
    const taskElement = screen.getByText(/learn react/i);
    expect(taskElement).toBeInTheDocument();
  });
});
