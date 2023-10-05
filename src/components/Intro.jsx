export default function Intro() {
  return (
    <section id="Intro" class="m-8">
      <div class="text-left flex flex-col lg:flex-row lg:justify-center lg:items-center">
        <div class="w-1/2">
          <h1 class="text-5xl font-bold">Sudhanv Apte</h1>
          <p class="lg:w-1/2 mt-16">
            Hi, I am Sudhanv. I am a web developer teaching myself to learn and
            explore new things. I am proficient in Python, C# and building responsive, user-friendly frontend using React.
            <br />
            <br />
            Besides web development, I am also interested in Computer vision and Robotics.
          </p>
          <br />
          <div class="flex justify-between items-center w-96 p-4">
            <a href="https://github.com/sudhanv09"><img src="github.svg" alt="github" /></a>
            <a href="https://www.linkedin.com/in/sudhanv-apte-144719171/"><img src="linkedin.svg" alt="linkedin" /></a>
            <a href="mailto:sudhanv.apte@gmail.com"><img src="mail.svg" alt="gmail" /></a>
            <a href="resume.pdf" target="_blank" class="bg-green-500 rounded-md p-4 text-white hover:shadow-lg hover:-translate-y-1">Resume</a>
          </div>
        </div>
        <img
          src="profile.jpg"
          alt="disp"
          width="350px"
          class="rounded-md mr-16 "
        />
      </div>

      <hr class="w-48 h-1 m-8 border-0 rounded bg-gradient-to-r from-yellow-200 via-green-200 to-green-500" />

      <div class="ml-8">
        <h1 class="text-3xl font-semibold p-4">Technologies</h1>
        <div class="grid lg:grid-cols-4 grid-cols-1 p-4 gap-y-8">
          <img src="c-sharp.png" alt="csharp" width="100px" />
          <img src="python.png" alt="python" width="100px" />
          <img src="go.svg" alt="golang" width="100px" />
          <img src="js.png" alt="js" width="100px" />
          <img src="science.png" alt="react" width="100px" />
          <img src="linux.png" alt="linux" width="100px" />
          <img src="docker.png" alt="docker" width="100px" />
          <img src="postgres.svg" alt="postgres" width="100px" />
        </div>
      </div>
    </section>
  );
}
