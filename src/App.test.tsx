import { render, screen, act } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";

let task1 = {
  name: "this is a task",
  tags: ["tag1", "tag2", "tag"],
  description: "description",
};
let task2 = {
  name: "is this a task",
  tags: ["tag1", "tag2", "gat", "tag"],
  description: "description2",
};

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

describe("testing of adding and editing one tasks", () => {
  test("add btn working", async () => {
    render(<App />);
    const addbtn = screen.getByRole("button", { name: /add/i });
    act(() => user.click(addbtn));

    const nameInput = screen.getByPlaceholderText(/enter task name/i);
    expect(nameInput).toBeInTheDocument();
    act(() => user.click(nameInput));
    await act(() => user.keyboard(String(task1.name)));

    const tagInput = screen.getByPlaceholderText(/enter task tag/i);
    expect(tagInput).toBeInTheDocument();
    act(() => user.click(tagInput));
    await act(() => user.keyboard(task1.tags.join()));

    const descriptionInput = screen.getByPlaceholderText(/enter description/i);
    expect(descriptionInput).toBeInTheDocument();
    act(() => user.click(descriptionInput));
    await act(() => user.keyboard(task1.description));

    const addeditBtn = screen.getByTitle(/add\/edit/i);
    expect(addeditBtn).toBeInTheDocument();
    act(() => user.click(addeditBtn));

    const task1name = screen.getByText(task1.name);
    expect(task1name).toBeInTheDocument();

    const task1tag1 = screen.getByRole("heading", { name: task1.tags[0] });
    expect(task1tag1).toBeInTheDocument();

    const task1tag2 = screen.getByRole("heading", { name: task1.tags[1] });
    expect(task1tag2).toBeInTheDocument();

    const task1tag3 = screen.getByRole("heading", { name: task1.tags[2] });
    expect(task1tag3).toBeInTheDocument();

    const task1DelBtn = screen.getByRole("img", {
      name: task1.name + "_trash",
    });
    expect(task1DelBtn).toBeInTheDocument();

    const task1EditBtn = screen.getByRole("img", {
      name: task1.name + "_edit",
    });
    expect(task1EditBtn).toBeInTheDocument();

    act(() => user.click(task1EditBtn));
    act(() => user.dblClick(nameInput));
    await act(() => user.keyboard(task2.name));
    act(() => user.dblClick(tagInput));
    await act(() => user.keyboard(task2.tags.join()));
    act(() => user.dblClick(descriptionInput));
    await act(() => user.keyboard(task2.description));
    act(() => user.click(addeditBtn));
  });
});

describe("edit button working", () => {
  test("Edit Button", async () => {
    render(<App />);
    const addbtn = screen.getByRole("button", { name: /add/i });
    act(() => user.click(addbtn));
    const nameInput = screen.getByPlaceholderText(/enter task name/i);
    const tagInput = screen.getByPlaceholderText(/enter task tag/i);
    const descriptionInput = screen.getByPlaceholderText(/enter description/i);
    const addeditBtn = screen.getByTitle(/add\/edit/i);

    act(() => user.click(nameInput));
    await act(() => user.keyboard(task1.description));

    act(() => user.click(tagInput));
    await act(() => user.keyboard(task1.tags.join()));

    act(() => user.click(descriptionInput));
    await act(() => user.keyboard(task1.description));

    act(() => user.click(addeditBtn));
  });
});
