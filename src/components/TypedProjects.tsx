import TypewriterComponent from 'typewriter-effect';

export default function TypedProjects() {
  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        cursor: '_',
        delay: 100,
        cursorClassName: 'text-malach text-5xl font-mono motion-safe:animate-ping',
        wrapperClassName: 'text-slate-200 text-5xl font-mono',
      }}
      onInit={(typewriter) => {
        typewriter.typeString(`Past Projects`).start();
      }}
    />
  );
}
