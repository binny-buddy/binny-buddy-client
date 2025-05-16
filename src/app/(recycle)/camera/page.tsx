'use client';

import SmallLogo from '@/assets/SmallLogo';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import flipIcon from '@/assets/icons/Icon/flip.svg';
import LoadingIcon from '@/components/Icon/LoadingIcon';

function CameraPage() {
  const webcamRef = useRef<Webcam>(null);
  const [facingMode, setFacingMode] = useState('user'); // user | environment
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setScreenshot(imageSrc);
      } else {
        console.error('getScreenshot failed. Possibly not ready yet.');
      }
    } else {
      console.error('webcamRef is null');
    }
  }, []);

  const toggleCamera = () => {
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
  };

  const uploadImageAsFile = async () => {
    if (!screenshot) return;

    const base64Data = screenshot.replace(/^data:image\/\w+;base64,/, '');
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length)
      .fill(0)
      .map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/jpeg' });
    const formData = new FormData();
    formData.append('file', blob, 'jy.jpg');

    try {
      const res = await fetch('/proxy/api-public/v1/request-reward', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      window.localStorage.setItem(
        `binnybuddy-${data.user.id}-result`,
        JSON.stringify(data)
      );
      window.location.href = '/guide';
    } catch (err) {
      window.alert('서버 에러! 잠시 후 다시 시도해 주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (screenshot) {
      setIsLoading(true);
      uploadImageAsFile();
    }
  }, [screenshot]);

  return (
    <div
      className={`fixed top-0 left-0 w-dvw h-dvh overflow-hidden ${
        isLoading ? 'z-40' : ''
      }`}
    >
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        allowFullScreen
        videoConstraints={{
          width: { ideal: 1920 },
          height: { ideal: 1080 },
          facingMode,
        }}
        audio={false}
        className="w-full h-full object-cover"
      />
      {/* White Box */}
      <div className="bg-white rounded-2xl px-5 py-4 z-10 absolute absolute-center top-32 w-[255px] text-center text-L">
        Ready to recycle?
        <br />
        <span className="text-main-800">Snap a photo of your trash!</span>
      </div>

      {isLoading && <LoadingIcon />}

      {/* Button */}
      <div className="absolute absolute-center bottom-8 w-full flex items-center justify-between gap-8 max:w-[430px] px-4">
        <div className="w-12 h-12" />
        <button
          onClick={capture}
          className="bg-main-400 w-20 h-20 rounded-full shadow-card flex justify-center items-center"
        >
          <SmallLogo fill="white" />
        </button>
        <button
          onClick={toggleCamera}
          className="bg-white w-10 h-10 rounded-full shadow-card flex justify-center items-center"
        >
          <Image src={flipIcon} alt="flip camera" />
        </button>
      </div>
    </div>
  );
}

export default CameraPage;
