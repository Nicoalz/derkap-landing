import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Badge from './Badge';

export default function Group() {
  const group = {
    name: 'Derkance',
    members: [
      {
        avatar: 'https://hrktxqpsqbjnockggnic.supabase.co/storage/v1/object/public/avatars/240c586e-1e18-4e1c-8ad2-c5afd205c4fd/avatar?t=1733941806838',
      },
      {
        avatar: 'https://hrktxqpsqbjnockggnic.supabase.co/storage/v1/object/public/avatars/109f9bde-d3d3-46ed-bef9-417b6f4adce0/avatar?t=1733941806838',
      },
      {
        avatar: 'https://hrktxqpsqbjnockggnic.supabase.co/storage/v1/object/public/avatars/f07ca6d1-8891-4ffd-97b7-631ee97ed513/avatar?t=1733941806838',
      },
      {
        avatar: 'https://hrktxqpsqbjnockggnic.supabase.co/storage/v1/object/public/avatars/1284d126-d889-4085-bcfe-db7e3b182b9f/avatar?t=1733941806838',
      }
    ],
  };

  return (
    <div className='relative flex flex-col gap-4 w-full px-4 bg-white border border-black rounded-xl py-4 text-black shadow-element'>
      <div className='flex gap-4 items-center justify-start relative w-full'>
        <div className='w-16 h-16 rounded flex items-center justify-center bg-white border border-gray-200'>
          <p>D</p>
        </div>
        <div className='flex flex-col gap-2'>
          <span className='text-xl font-semibold max-w-48 overflow-hidden truncate'>
            Derkance
          </span>
          <Badge status='posting' />
        </div>
        <button className='absolute right-0 bg-purple text-white rounded-full aspect-square px-2 py-2 focus:outline-none focus:ring focus:ring-violet-300'>
          <SquareArrowOutUpRight size={14} />
        </button>
      </div>
      <div className='h-px w-full bg-gray-400'></div>
      <div className='w-full flex justify-between items-center'>
        <ul className='list-none flex'>
          {group.members.map((member, index) => (
            <div
              className={`flex flex-col items-center ${index !== 0 && '-ml-2'}`}
              style={{ zIndex: group.members.length - index }}
              key={index}
            >
              <Image
                src={member.avatar}
                alt='Profile picture'
                width={40}
                height={40}
                className='min-w-10 min-h-10 max-h-10 max-w-10 rounded-full object-cover'
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
