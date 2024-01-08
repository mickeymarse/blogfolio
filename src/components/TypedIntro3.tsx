import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function TypedIntro3() {
  const [text] = useTypewriter({
    words: ['Hello World!', 'From Me!', 'To You!', 'Hooga chaga hooga hooga!'],
    loop: 0,
  });
  return (
    <div className='App'>
      <span className='text-2xl text-malach'>{text}</span>
      <Cursor cursorColor='#000' />
    </div>
  );
}
