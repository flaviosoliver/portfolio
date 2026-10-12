import React from 'react';
import { Button } from 'react-bootstrap';

function FileDownload() {
  const driveLink =
    'https://drive.google.com/file/d/1D0y0krS2zKdiNK6phjCQu6IBPSf4RT-3/view?usp=sharing';

  return (
    <div className="mt-3">
      <Button
        href={driveLink}
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
      >
        Visualizar / Baixar Currículo
      </Button>
    </div>
  );
}

export default FileDownload;
