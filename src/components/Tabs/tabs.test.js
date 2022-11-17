import { screen, render, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";
import "@testing-library/jest-dom/extend-expect";

describe("Tabs Component", () => {
  describe("When user clicks a tab", () => {
    beforeEach(() => {
      render(<Tabs />);
    });

    it("should render the relevant content", () => {
      const tab = screen.queryByText("Update Logs");
      fireEvent.click(tab);
      expect(screen.queryByText("Update Logs: New Content")).toHaveTextContent(
        "Update Logs: New Content"
      );
    });

    it("should not render the relevant content", () => {
      const tab = screen.queryByText("Details");
      fireEvent.click(tab);
      expect(screen.queryByText("Update Logs: New Content")).not.toBeVisible();
    });
  });
});
