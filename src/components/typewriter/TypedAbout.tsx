import TypewriterComponent from 'typewriter-effect';

export default function TypedAbout() {
  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        cursor: '_',
        delay: 100,
        cursorClassName: 'text-malach text-5xl font-mono motion-safe:animate-pulse',
        wrapperClassName: 'text-pinkish text-6xl font-matrix font-bold',
      }}
      onInit={(typewriter) => {
        typewriter.typeString(`Who Am I`).start();
      }}
    />
  );
}
