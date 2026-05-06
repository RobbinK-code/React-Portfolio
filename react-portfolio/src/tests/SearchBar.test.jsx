import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SearchBar from "../components/SearchBar"

test("updates search input", async () => {
  const setSearchTerm = vi.fn()

  render(
    <SearchBar
      searchTerm=""
      setSearchTerm={setSearchTerm}
    />