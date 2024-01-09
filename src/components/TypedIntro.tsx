import TypewriterComponent from 'typewriter-effect';

export default function TypedIntro() {
  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        loop: true,
        cursor: '_',
        delay: 150,
        cursorClassName: 'text-malach text-6xl motion-safe:animate-ping',
        wrapperClassName: 'text-malach text-6xl',
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('Welcome!')
          .pauseFor(3000)
          .deleteAll(25)
          .typeString(`I'm Michele Maria Serrapica`)
          .pauseFor(3000)
          .changeDeleteSpeed(25)
          .deleteChars(23)
          .typeString(`a Full Stack Developer`)
          .pauseFor(3000)
          .start();
      }}
    />
  );
}
