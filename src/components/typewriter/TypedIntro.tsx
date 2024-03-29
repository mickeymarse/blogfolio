import TypewriterComponent from 'typewriter-effect';
// FIXME: How to prevent whole page being pushed down when text jump on new isLineBreak. Maybe responsiveness?
export default function TypedIntro() {
  const textSize: string = 'text-2xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl';

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
          .typeString(`...:::Welcome:::...`)
          .pauseFor(2500)
          .deleteAll(25)
          .typeString(`It's me, Mickey!`)
          .pauseFor(2500)
          .deleteAll(25)
          .typeString(`Junior Full Stack Dev`)
          .pauseFor(3000)
          .deleteAll(25)
          .typeString(`Speculative fiction writer`)
          .pauseFor(3000)
          .deleteAll(25)
          .typeString(`And a great baker too!`)
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
