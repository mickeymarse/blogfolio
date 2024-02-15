import TypewriterComponent from 'typewriter-effect';

export default function TypedTech() {
  const textSize: string = 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl';

  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        cursor: '|',
        delay: 100,
        cursorClassName: `${textSize} text-neonp font-mono motion-safe:animate-pulse`,
        wrapperClassName: `${textSize} font-sans font-bold`,
      }}
      onInit={(typewriter) => {
        typewriter.typeString(`Tech Stack`).start();
      }}
    />
  );
}
