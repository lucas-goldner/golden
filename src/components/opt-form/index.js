import React from 'react';
import { Container, Input, Break, ButtonLink, Text } from './styles/opt-form';
import { Link as ReachRouterLink } from 'react-router-dom';

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <ButtonLink {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="->" />
    </ButtonLink>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
