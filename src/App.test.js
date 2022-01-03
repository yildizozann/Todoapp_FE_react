import { cleanup, render, screen } from '@testing-library/react';
import App from './App';
import Todos from './components/Todos';
import Todolist from './components/Todolist';
import ReactDOM from "react-dom"
import user from "@testing-library/user-event"

afterEach(cleanup)
test('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/to do list/i);
  expect(linkElement).toBeInTheDocument();
  const div = document.createElement("div")
  ReactDOM.render(<button></button>,div)
  user.type(screen.getByRole('textbox'), 'do homework!')
  expect(screen.getByRole('textbox')).toHaveValue('do homework!')
});
test('render without crashing todos', () => {
  render(<Todos/>)
  const todo = "do work"
  render(<Todos text={todo}/>)
  expect(screen.getByText("do work")).toBeInTheDocument()
})
test('render without crashing todo list', () => {
  const todo = ["do work", "do swim"]
  render(<Todolist todos={todo}/>)
  expect(screen.getAllByRole("listitem").length).toBe(2)
 
})

