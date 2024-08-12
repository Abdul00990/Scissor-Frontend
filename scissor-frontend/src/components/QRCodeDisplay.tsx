import React from 'react';
import * as QRCode from 'qrcode';

interface QRCodeDisplayProps {
  url: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ url }) => {
  const [qrCodeUrl, setQrCodeUrl] = React.useState('');

  React.useEffect(() => {
    const generateQRCode = async () => {
      try {
        const qrCode = await QRCode.toDataURL(url);
        setQrCodeUrl(qrCode);
      } catch (err) {
        console.error('Error generating QR code', err);
      }
    };

    generateQRCode();
  }, [url]);

  return qrCodeUrl ? <img src={qrCodeUrl} alt="QR Code" /> : null;
};

export default QRCodeDisplay;
