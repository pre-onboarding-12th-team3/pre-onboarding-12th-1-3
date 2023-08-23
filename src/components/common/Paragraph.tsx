import { ComponentPropsWithRef, Ref, forwardRef } from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-size: x-large;
  font-weight: 500;
  margin: 12px 4px;
`;

interface Props extends ComponentPropsWithRef<'p'> {
  children: React.ReactNode;
}

const Paragraph = ({ children, ...rest }: Props, ref: Ref<HTMLParagraphElement>) => {
  return (
    <P ref={ref} {...rest}>
      {children}
    </P>
  );
};

export default forwardRef(Paragraph);
