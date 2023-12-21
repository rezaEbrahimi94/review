import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme/theme';
import { SAM_WELCOME } from '@/constants';

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe('<Login />', () => {
  it('Should include logo', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );
    expect(screen.getByText('sam')).toBeInTheDocument();
  });

  it('Should include welcome', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );
    expect(screen.getByText(SAM_WELCOME)).toBeInTheDocument();
  });

  it('Should include text field for password', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );
    const password = screen.getByTestId('password');
    expect(password).toBeInTheDocument();
    expect((password as HTMLInputElement).value).toBe("");
  });

  it('Should include text field for username', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );
    const email = screen.getByTestId('username');
    expect(email).toBeInTheDocument();
    expect((email as HTMLInputElement).value).toBe("");
  });
});
