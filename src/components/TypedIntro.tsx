import TypewriterComponent from 'typewriter-effect';

export default function TypedIntro() {
  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('<strong>JS</strong> plugin for a cool typewriter effect and')
          .pauseFor(2500)
          .deleteAll()
          .start();
      }}
    />
  );
}
