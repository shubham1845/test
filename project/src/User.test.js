import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UsersList from "./components/UsersList";

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: "Leanne Graham" }]),
  })
);

describe("UsersList Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the loading state initially", () => {
    render(<UsersList />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("fetches and displays user names", async () => {
    render(<UsersList />);

    // Wait for the users to be displayed
    await waitFor(() =>
      expect(screen.getByText("John Doe")).toBeInTheDocument()
    );
  });

  it("displays an error message on API failure", async () => {
    // Mock a failed fetch request
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("API Error"))
    );

    render(<UsersList />);

    // Wait for the error message
    await waitFor(() =>
      expect(screen.getByText(/error: api error/i)).toBeInTheDocument()
    );
  });
});
