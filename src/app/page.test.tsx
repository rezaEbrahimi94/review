import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './page';
import '@testing-library/jest-dom';

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe('<Page />', () => {
  it('Should include loading', async () => {
    render(
        <Page />
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  // describe('<Page />', () => {
  //   it('renders the component and fetches the lambda message', async () => {
  //     (fetchLambdaMessage as jest.Mock).mockResolvedValue('Mocked Lambda Message');
  
  //     render(<Page />);
      
  //     expect(screen.getByText('Welcome to SAM Project!')).toBeInTheDocument();
  //     expect(screen.getByText('Hello from Next.js!')).toBeInTheDocument();
  
  //     await waitFor(() => {
  //       expect(screen.getByText('Mocked Lambda Message')).toBeInTheDocument();
  //     });
  //   });
  // });
});
