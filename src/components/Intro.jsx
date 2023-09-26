export default function Intro() {
  return (
    <section id="Intro" class="h-screen m-8">
      <div class="flex justify-center items-center">
        <div class="w-1/2">
          <h1 class="text-5xl font-bold">Sudhanv Apte</h1>
          <p class="w-1/2 mt-16">
            Hi, I am Sudhanv. I am a web developer teaching myself to learn and
            explore new things. I am proficient in Python, C# and frontend
            technologies like React. 
            <br />
            <br />
            Besides web development, I also like to play around
            with Deep learning, Computer vision and Robotics.
          </p>
        </div>
        <img
          src="profile.jpg"
          alt="disp"
          width="350px"
          class="rounded-md mr-16 "
        />
      </div>
      
      <hr class="w-48 h-1 m-12 border-0 rounded bg-gradient-to-r from-yellow-200 via-green-200 to-green-500" />

      <div class="p-8">
        <h1 class="text-2xl font-semibold">Technologies</h1>
        <div class="grid lg:grid-cols-4 grid-cols-1 p-4 gap-y-4">
          <img src="c-sharp.png" alt="csharp" width="100px" />
          <img src="python.png" alt="python" width="100px" />
          <img src="js.png" alt="js" width="100px" />
          <img src="science.png" alt="react" width="100px" />
          <img src="linux.png" alt="linux" width="100px" />
          <img src="docker.png" alt="docker" width="100px" />
        </div>
      </div>
    </section>
  );
}
