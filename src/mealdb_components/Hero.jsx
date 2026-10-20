export function Hero() {
  return (
    <section className="bg-dark bg-blend-multiply bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')]">
      <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
        <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white md:text-5xl lg:text-6xl">
          We invest in the world’s potential
        </h1>
        <p className="mb-8 text-base font-normal text-white md:text-xl sm:px-16 lg:px-48">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 md:space-x-4">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-base border border-transparent bg-brand px-5 py-3 text-base font-medium text-white shadow-xs hover:bg-brand-strong focus:outline-none focus:ring-4 focus:ring-brand-medium"
          >
            Getting started
            <svg
              className="-me-0.5 ms-1.5 h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>
          <button
            type="button"
            className="rounded-base border border-default-medium bg-neutral-secondary-medium px-5 py-3 text-base font-medium leading-5 text-body shadow-xs hover:bg-neutral-tertiary-medium hover:text-heading focus:outline-none focus:ring-4 focus:ring-neutral-tertiary"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
