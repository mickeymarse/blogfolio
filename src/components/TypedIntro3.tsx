import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function TypedIntro3() {
  const [text] = useTypewriter({
    words: ['Welcome!', `I'm Michele Maria Serrapica`, `I'm a Full Stack Developer`],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 25,
    delaySpeed: 3000,
  });
  return (
    <div className='App'>
      <span>{text}</span>
      <Cursor cursorStyle='_' />
    </div>
  );
}
