import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TestComponents from '@/components/TestComponents';

describe('TestComponents Component', () => {
  it('renders with the correct name', () => {
    render(<TestComponents title="test title" />);
    expect(screen.getByText('test title 테스트 컴포넌트'));
  });
});
