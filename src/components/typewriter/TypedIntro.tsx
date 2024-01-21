import TypewriterComponent from 'typewriter-effect';

export default function TypedIntro() {
  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        loop: true,
        cursor: '_',
        delay: 100,
        cursorClassName: 'text-neonp text-5xl font-mono motion-safe:animate-ping',
        wrapperClassName: ' text-6xl font-matrix font-bold',
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(`Welcome to my virtual abode`)
          .pauseFor(2500)
          .deleteAll(25)
          .typeString(`I'm Michele Maria Serrapica`)
          .pauseFor(3000)
          .changeDeleteSpeed(25)
          .deleteChars(23)
          .typeString(`a Full Stack Web Developer`)
          .pauseFor(3000)
          .changeDeleteSpeed(25)
          .deleteChars(26)
          .typeString(`a speculative fiction writer`)
          .pauseFor(3000)
          .changeDeleteSpeed(25)
          .deleteChars(28)
          .typeString(`a great baker too!`)
          .pauseFor(2000)
          .deleteAll(25)
          .typeString(`Have a look around... `)
          .pauseFor(2000)
          .deleteAll(25)
          .typeString(`... and enjoy your staying :) `)
          .pauseFor(2000)
          .deleteAll(25)
          .typeString(`See you soon :3 `)
          .pauseFor(3000)
          .start();
      }}
    />
  );
}
