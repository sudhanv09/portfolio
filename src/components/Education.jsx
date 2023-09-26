export default function Education() {
  return (
    <section id="education" class="m-8">
      <hr class="w-48 h-1 m-8 border-0 rounded bg-gradient-to-r from-yellow-200 via-green-200 to-green-500" />
      <h1 class="text-3xl font-semibold mx-8">Education</h1>

      <div class="mt-8 p-8">
        <ol class="border-l border-neutral-300 dark:border-neutral-500">
          <li>
            <div class="flex-start flex items-center pt-3">
              <div
                class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-green-500"></div>
              <p class="text-sm ">
                30.06.2023
              </p>
            </div>
            <div class="mb-6 ml-4 mt-2">
              <h4 class="mb-1.5 text-xl font-semibold">Master's in Electrical Engineering</h4>
              <p class="mb-3">
                Masters at National Taipei University of Technology, Taiwan with specialization in Anomaly Detection.
                Took a variety of courses like Deep Learning, Operating Systems, File System and Information Security.
                <br />
                GPA: 3.7/4
              </p>
            </div>
          </li>

          <li>
            <div class="flex-start flex items-center pt-2">
              <div
                class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-green-500 "></div>
              <p class="text-sm ">
                01.06.2021
              </p>
            </div>
            <div class="mb-6 ml-4 mt-2">
              <h4 class="mb-1.5 text-xl font-semibold">Bachelors in Mechatronics Engineering</h4>
              <p class="mb-3">
                Bachelors degree at S.R.M Institute of Science and Technology, Chennai, India.
                <br />
                GPA: 7.2/10
              </p>
            </div>
          </li>

          <li>
            <div class="flex-start flex items-center pt-2">
              <div
                class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-green-500 "></div>
              <p class="text-sm">
                01.04.2017
              </p>
            </div>
            <div class="ml-4 mt-2 pb-5">
              <h4 class="mb-1.5 text-xl font-semibold">High School</h4>
              <p class="mb-3 ">
                Completed High school with a science degree at Narayana Junior College, Hyderabad, India.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
