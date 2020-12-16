const HomePage = () => (
  <>
    <div className="flex-1 mx-auto ">
      <div className="grid gap-4 grid-col-1 lg:grid-cols-12 lg:gap-10">
        <div className="col-span-full lg:col-start-1 lg:col-end-13 z-50 -mb-0 lg:-mb-20">
          <img
            className="flex flex-wrap justify-start mx-auto text-center"
            style={{ maxWidth: '150px' }}
            src="me.png"
            alt=""
          />
        </div>
        <div className="row-span-2 lg:col-span-5 col-span-full">
          <div className="flex flex-wrap h-full p-8 xl:py-5 xl:px-8">
            <h1 className="w-full m-auto text-left text-5xl font-medium">
              Hey there, I&rsquo;m <span className="font-bold">Paulo Avramenko</span> software
              developer, focused primarily on the JavaScript.
            </h1>
          </div>
        </div>
        <div className="row-span-2 lg:col-span-7 col-span-full">
          <div className="flex flex-wrap h-full p-8 bg-gray-100 shadow-xl rounded-xl dark:bg-gray-900 xl:py-5 xl:px-10 ">
            <div className="w-full py-2 text-left xl:py-6 text-lg m-auto">
              I’ve been developing and working since 2016. I am very proud of my career paths,
              though I believe the best is yet to come. Raising my standards for new challenges, I
              aspire to grow as a developer continuously learning more about latest technologies and
              developments that are coming out of the tech ecosystem. I believe in a combination of
              humbleness, passion, dedication, hard work, and fun for a successful path.
            </div>
          </div>
        </div>
        <div className="row-span-2 lg:col-span-7 col-span-full">
          <div className="flex flex-wrap h-full p-8 bg-gray-100 shadow-xl rounded-xl dark:bg-gray-900 xl:py-5 xl:px-10 ">
            <div className="w-full py-2 text-left xl:py-6 text-lg m-auto"></div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default HomePage
