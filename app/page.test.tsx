import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "./page";
import { describe, it } from "node:test";

describe("HomePage", () => {
    it("allows the user to input a number, submit it, and display it", () => {
    render(<HomePage />);

    const numberInput = screen.getByTestId("number-input");
    const submitButton = screen.getByTestId("submit-button");
    const displayInput = screen.getByTestId("display-input");

    fireEvent.change(numberInput, { target: { value: "40" } });

    fireEvent.click(submitButton);

    expect(displayInput).toHaveValue("40");
    });
});
