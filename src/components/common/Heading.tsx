import { ComponentPropsWithRef, Ref, forwardRef } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: xx-large;
  font-weight: 700;
  margin: 12px 4px;
`;

interface Props extends ComponentPropsWithRef<'h1'> {
  children: React.ReactNode;
}

const Heading = ({ children, ...rest }: Props, ref: Ref<HTMLHeadingElement>) => {
  return (
    <H1 ref={ref} {...rest}>
      {children}
    </H1>
  );
};

export default forwardRef(Heading);
