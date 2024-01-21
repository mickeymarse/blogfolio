import TypewriterComponent from 'typewriter-effect';

export default function TypedAbout() {
  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        cursor: '|',
        delay: 100,
        cursorClassName: 'text-neonp text-5xl font-mono motion-safe:animate-pulse',
        wrapperClassName: ' text-6xl font-matrix font-bold',
      }}
      onInit={(typewriter) => {
        typewriter.typeString(`Contact`).start();
      }}
    />
  );
}
