'use client';

import { BinnyType } from '@/types/character';
import { useEffect, useRef, useState } from 'react';
import { TYPE_ICON } from '../CollectionCard';
import Image from 'next/image';
import EditIcon from '@/assets/icons/Icon/pen.svg';

interface Props {
  defaultValue: string;
  binnyType: BinnyType;
  binnyId: string | number;
}

function NameInput({ defaultValue, binnyType, binnyId }: Props) {
  const [value, setValue] = useState(defaultValue || 'Binny');
  const timeoutRef = useRef<number | null>(null);

  const updateAPI = async () => {
    try {
      // fetch 또는 axios 호출
      await fetch(`/proxy/api-public/v1/binny/${binnyId}?name=${value}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('수정 완료');
    } catch (error) {
      console.error('수정 실패:', error);
    }
  };

  useEffect(() => {
    // 값이 바뀔 때마다 타이머 초기화
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // 1.5초 후에 API 호출
    (timeoutRef.current as any) = setTimeout(() => {
      // 실제 수정 API 호출 함수
      updateAPI();
    }, 1500);

    // cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value]);

  return (
    <div className="flex gap-4 items-center justify-center">
      <Image src={TYPE_ICON[binnyType]} alt="recycle type icon" />
      <label className="flex gap-2 relative h-6">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            width: `${value.length + 1}ch`,
            minWidth: '6ch',
          }}
          placeholder="Name"
          className="text-XXL font-bold border-b-2 border-transparent focus:border-b-black focus:outline-none"
        />
        <Image
          src={EditIcon}
          alt="edit icon"
          width={24}
          height={24}
          className="absolute right-0 cursor-pointer"
        />
      </label>
    </div>
  );
}

export default NameInput;
