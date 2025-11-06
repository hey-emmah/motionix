import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ variant?: string; size?: string }>`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;

  ${({ variant }) =>
    variant === 'outline'
      ? css`
          background: transparent;
          border: 2px solid var(--m-primary, #6C63FF);
          color: var(--m-primary, #6C63FF);
        `
      : css`
          background: var(--m-primary, #6C63FF);
          color: white;
        `}

  ${({ size }) =>
    size === 'sm'
      ? css`
          padding: 6px 10px;
          font-size: 0.85rem;
        `
      : size === 'lg'
      ? css`
          padding: 12px 18px;
          font-size: 1.05rem;
        `
      : css`
          padding: 8px 14px;
          font-size: 0.95rem;
        `}

  &:hover {
    transform: translateY(-2px);
  }
`;
