export default function Nav() {
  return (
    <nav
      class="flex justify-evenly p-4 lg:ml-32 lg:mr-32 bg-green-500 text-white
        "
    >
      {/* TODO make responsive */}
      <ul class="space-x-4">
        <a href="#Intro">Home</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </ul>
    </nav>
  );
}
