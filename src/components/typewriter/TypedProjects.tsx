import TypewriterComponent from 'typewriter-effect';

export default function TypedProjects() {
  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        cursor: '_',
        delay: 100,
        cursorClassName: 'text-malach text-5xl font-mono motion-safe:animate-pulse',
        wrapperClassName: 'text-pinkish text-6xl font-mono',
      }}
      onInit={(typewriter) => {
        typewriter.typeString(`Recent Projects`).start();
      }}
    />
  );
}
