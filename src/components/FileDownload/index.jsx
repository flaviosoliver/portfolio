import React from 'react';
import { Button } from 'react-bootstrap';

function FileDownload() {
  const getGoogleDriveDirectLink = (shareableLink) => {
    const fileId = shareableLink.match(/[-\w]{25,}/);
    if (!fileId) {
      throw new Error('Link do Google Drive inválido');
    }
    return `https://drive.google.com/uc?export=download&id=${fileId[0]}`;
  };

  const downloadFromGoogleDrive = () => {
    const driveLink =
      'https://drive.google.com/file/d/1D0y0krS2zKdiNK6phjCQu6IBPSf4RT-3/view?usp=sharing';

    try {
      const directLink = getGoogleDriveDirectLink(driveLink);
      const link = document.createElement('a');
      link.href = directLink;
      link.download = 'arquivo.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      alert(`Erro ao processar o link do arquivo: ${error.message}`);
    }
  };

  return (
    <div className="">
      <div>
        <Button onClick={downloadFromGoogleDrive} className="" type="button">
          Download currículo
        </Button>
      </div>
    </div>
  );
}

export default FileDownload;
