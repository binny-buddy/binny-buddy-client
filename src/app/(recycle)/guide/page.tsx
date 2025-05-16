'use client';

import { TYPE_ICON } from '@/components/CollectionCard';
import GuideResultIcon from '@/components/Icon/GuideResultIcon';
import { BinnyType } from '@/types/character';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const TYPE_MSG = {
  cup: 'To-go Cup',
  container: 'Delivery',
  bottle: 'Bottle',
};

const MSG = {
  success: 'Well done! A reward is waiting for you!',
  fail: 'Try again with the guide for your reward!',
};

function GuidePage() {
  const [data, setData] = useState<any>(null);
  const [file, setFile] = useState<any>(null);

  const getFileData = async () => {
    if (!data) return;
    const res = await (
      await fetch(`/proxy/api-public/v1/file/${data.file_id}`)
    ).json();
    setFile(res);
  };

  useEffect(() => {
    setData(
      JSON.parse(window.localStorage.getItem('binnybuddy-1-result') || '')
    );
  }, []);

  useEffect(() => {
    getFileData();
  }, [data]);

  return (
    <div className="flex flex-col gap-6">
      {data && (
        <>
          <section className="flex flex-col gap-2 items-center">
            <GuideResultIcon isSuccessed={data.is_binny_created} />
            <p
              className={`text-L font-bold text-center ${
                data.is_binny_created ? 'text-main-400' : 'text-gray-600'
              }`}
            >
              {MSG[data.is_binny_created ? 'success' : 'fail']}
            </p>
          </section>

          <section>
            <div className="mx-auto relative rounded-2xl shadow-card overflow-hidden w-[171px] h-[171px]">
              {file && (
                <Image
                  src={`data:${file.content_type};base64,${file.data}`}
                  alt="recycle picture"
                  width={171}
                  height={171}
                  className="w-full h-full object-center object-cover"
                  priority
                />
              )}
              <Image
                src={TYPE_ICON[data?.detection_result?.binny_type as BinnyType]}
                alt="recycle type icon"
                className="absolute top-2 right-2"
              />
            </div>
            <p className="text-L text-gray-800 text-center mt-3">
              <span className="text-togo-300">
                {TYPE_MSG[data?.detection_result?.binny_type as BinnyType]}
              </span>{' '}
              found!
            </p>
          </section>

          <section className="bg-white shadow-card rounded-2xl px-5 py-6 flex flex-col gap-4">
            <p className="text-L">How to recycle?</p>
            <p className="text-gray-600">
              {data.detection_result?.how_to_recycle}
            </p>
          </section>
        </>
      )}
    </div>
  );
}

export default GuidePage;
