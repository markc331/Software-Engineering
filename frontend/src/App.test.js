import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from './UserInfoView/SignUp';
import LogIn from './UserInfoView/LogIn';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';

beforeEach(() => {
  jest.spyOn(console, 'error')
  console.error.mockImplementation(() => null);
});

afterEach(() => {
  console.error.mockRestore()
})

/* Sign In Tests */
test('SIGN IN TEST: Verify Sign In Page\'s Elements', () => {
  render(<Router><LogIn /></Router>);
  const signInText = screen.getByText('Sign in');
  const button = screen.getByText('Sign In').closest('button');
  const usernameTextField = screen.getByTestId('username');
  const passwordTextField = screen.getByTestId('password');
  expect(signInText).toBeInTheDocument();
  expect(usernameTextField).toBeEnabled();
  expect(passwordTextField).toBeEnabled();
  expect(button).toBeEnabled();
});

test('SIGN IN TEST: Verify User Can Type Into Username & Password Field & Sign In', () => {
  render(<Router><SignUp /></Router>);
  const usernameTextField = screen.getByTestId('username');
  const passwordTextField = screen.getByTestId('password');
  const button = screen.getByText('Sign In').closest('button');
  userEvent.type(usernameTextField, 'test@mail.com');
  userEvent.type(passwordTextField, 'testPassword');
  button.click();
});

/* Sign Up Tests */
test('SIGN UP TEST: Verify Sign Up Page\'s Elements', () => {
  render(<Router><SignUp /></Router>);
  const signInText = screen.getByText(/Sign up/i);
  const button = screen.getByText('Sign In').closest('button');
  const usernameTextField = screen.getByTestId('username');
  const passwordTextField = screen.getByTestId('password');
  expect(signInText).toBeInTheDocument();
  expect(usernameTextField).toBeEnabled();
  expect(passwordTextField).toBeEnabled();
  expect(button).toBeEnabled();
});

test('SIGN UP TEST: Verify User Can Type Into Username & Password Field & Sign In', () => {
  render(<Router><SignUp /></Router>);
  const usernameTextField = screen.getByTestId('username');
  const passwordTextField = screen.getByTestId('password');
  const button = screen.getByText('Sign In').closest('button');
  userEvent.type(usernameTextField, 'test@mail.com');
  userEvent.type(passwordTextField, 'testPassword');
  button.click();
});

/* Home Page tests */
test('HOME PAGE TEST: Verify Home Page\'s Elements', () => {
  render(<Router><Home /></Router>);
  const applicationTitle = screen.getByText('Goal Tracking App');
  const todosSection = screen.getByText('To Do\'s');
  const progressTrackerSection = screen.getByText('Progress Tracker');
  expect(applicationTitle).toBeInTheDocument();
  expect(todosSection).toBeInTheDocument();
  expect(progressTrackerSection).toBeInTheDocument();
});

test('HOME PAGE TEST: Verify Link to To Do\'s', () => {
  render(<Router><Home /></Router>);
  expect(screen.getByText('See To Do\'s').closest('a')).toHaveAttribute('href', '/TaskPage')
});

test('HOME PAGE TEST: Verify Link to Progress Tracker', () => {
  render(<Router><Home /></Router>);
  expect(screen.getByText('See Progress Tracker').closest('a')).toHaveAttribute('href', '/progresstracker')
});

/* ToDo Tests */
// TODO: Implement tests

/* Progress Tracker Tests */
// TODO: Implement tests