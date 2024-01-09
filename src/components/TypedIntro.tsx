import TypewriterComponent from 'typewriter-effect';

export default function TypedIntro() {
  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        loop: true,
        cursor: '_',
        delay: 100,
        cursorClassName: 'text-malach text-5xl font-mono motion-safe:animate-ping',
        wrapperClassName: 'text-malach text-5xl font-mono',
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(
            `<span class='motion-safe:animate-pulse'>Welcome to my humble virtual abode</span>`
          )
          .pauseFor(2500)
          .deleteAll(25)
          .typeString(`I'm Michele Maria Serrapica`)
          .pauseFor(3000)
          .changeDeleteSpeed(25)
          .deleteChars(23)
          .typeString(`a Full Stack Developer`)
          .pauseFor(3000)
          .changeDeleteSpeed(25)
          .deleteChars(22)
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
          .typeString(`See you soon <3`)
          .pauseFor(2000)
          .start();
      }}
    />
  );
}
