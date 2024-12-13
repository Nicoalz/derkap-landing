const ChallengeBox = () => {
  return (
    <div className='min-h-16 max-h-fit flex w-full px-4 bg-white border border-black rounded-xl py-2 text-black shadow-element gap-4 items-center'>
      <div className='w-10 h-10 aspect-square flex items-center justify-center'>
        <p className='text-3xl text-center'>😹</p>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <p className='text-sm text-black line-clamp-2 '>Fais une demande en mariage dans la rue 💍</p>
        <div className='flex items-center gap-1'>
          <p className='text-sm line-clamp-1 font-sans'>Par Augustin</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeBox;
