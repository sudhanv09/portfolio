import Card from "./Card"

export default function Projects() {
  return (
    <section id="projects" class=" m-8">
      <div class="flex items-end flex-col ">
        <hr class="w-48 h-1 m-8 border-0 rounded bg-gradient-to-r from-yellow-200 via-green-200 to-green-500" />
        <h1 class="text-3xl font-semibold mx-8">Projects</h1>
      </div>
      <div class="grid gap-2 grid-cols-3">
        <Card name="TimeKeeper" desc="A simple time management app written in C# and React" link="https://github.com/sudhanv09/TimeKeeper" />
        <Card name="Katalogue" desc="Webapp to read epubs, track progress and search for book metadata" link="https://github.com/sudhanv09/katalogue" />
        <Card name="PMC" desc="CLI app to watch on-device videos and sync them to Trakt" link="https://github.com/sudhanv09/pmc" />
      </div>
    </section>

  )
}
