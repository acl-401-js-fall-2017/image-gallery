import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  color: red;
`;

export default ({ submit, action, allowName = false }) => (
  <Form>
    <label>name: <input name="name"/></label>
  </Form>
);