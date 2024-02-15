import TypewriterComponent from 'typewriter-effect';
// FIXME: How to prevent whole page being pushed down when text jump on new isLineBreak. Maybe responsiveness?
export default function TypedIntro() {
  const textSize: string = 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl';

  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        loop: true,
        cursor: '|',
        delay: 100,
        cursorClassName: `${textSize} text-neonp font-mono motion-safe:animate-ping`,
        wrapperClassName: `${textSize} font-sans font-bold`,
      }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(4500)
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
          .typeString(`... and enjoy your stay.`)
          .pauseFor(2000)
          .deleteAll(25)
          .typeString(`See you soon!`)
          .pauseFor(2000)
          .start();
      }}
    />
  );
}
