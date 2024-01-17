import TypewriterComponent from 'typewriter-effect';

export default function TypedTech() {
  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        cursor: '_',
        delay: 100,
        cursorClassName: 'text-malach text-5xl font-mono motion-safe:animate-pulse',
        wrapperClassName: 'text-white text-6xl font-matrix font-bold',
      }}
      onInit={(typewriter) => {
        typewriter.typeString(`Tech Stack`).start();
      }}
    />
  );
}
