export default function Card(props) {
  return (
    <div class="w-96 p-8 my-8 space-y-4 rounded-md shadow-lg hover:shadow-green-600 hover:-translate-y-1 hover:scale-10">
      <h3 class="text-xl font-semibold">{props.name}</h3>
      <p>{props.desc}</p>
      <a href={props.link}><img src="github.svg" alt="proj_link" width="35px" class="mt-2" /></a>
    </div>
  )
}
