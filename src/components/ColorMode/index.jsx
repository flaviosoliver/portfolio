import React from 'react';
import Form from 'react-bootstrap/Form';

export default function ColorMode() {
  return (
    <div className="nav-header-items">
      <Form>
        <Form.Check type="switch" id="custom-switch" label="Modo claro" />
      </Form>
    </div>
  );
}
