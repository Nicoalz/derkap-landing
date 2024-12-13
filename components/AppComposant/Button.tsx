interface ButtonProps {
  text: string | React.ReactNode;
}
export default function Button({ text }: ButtonProps) {
  return (
    <button className='bg-purple text-white py-2 px-4 rounded text-sm'>
      {' '}
      {text}{' '}
    </button>
  );
}
