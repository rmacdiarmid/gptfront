import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import LogsList, { GET_LOGS } from './LogsList';

const mocks = [
  {
    request: {
      query: GET_LOGS,
    },
    result: {
      data: {
        frontendLogs: [
          { id: 1, message: 'Log 1', timestamp: '2022-01-01T00:00:00Z' },
          { id: 2, message: 'Log 2', timestamp: '2022-01-02T00:00:00Z' },
        ],
      },
    },
  },
];

describe('LogsList', () => {
  it('renders a list of logs', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <LogsList />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull();
    });

    const messageElement = screen.getByText(/Log \d/);
    expect(messageElement).toBeInTheDocument();

    const timestampElement = screen.getByText(/2022/);
    expect(timestampElement).toBeInTheDocument();

    const logElements = screen.getAllByRole('listitem');
    expect(logElements.length).toBeGreaterThan(0);
  });
});
