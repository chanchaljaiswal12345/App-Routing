import React from 'react'

const FaqSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="container mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-center text-4xl font-semibold text-gray-800 dark:text-white">
        Frequently asked questions
      </h1>

      <div className="mt-12 space-y-8">
        <div className="rounded-lg border-2 border-gray-100 dark:border-gray-700">
          <button className="flex w-full items-center justify-between p-8">
            <h1 className="font-semibold text-gray-700 dark:text-white">
              How i can play for my appoinment ?
            </h1>

            <span className="rounded-full bg-gray-200 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12H6"
                />
              </svg>
            </span>
          </button>

          <hr className="border-gray-200 dark:border-gray-700" />

          <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi
            ab maxime cum laboriosam recusandae facere dolorum veniam quia
            pariatur obcaecati illo ducimus?
          </p>
        </div>

        <div className="rounded-lg border-2 border-gray-100 dark:border-gray-700">
          <button className="flex w-full items-center justify-between p-8">
            <h1 className="font-semibold text-gray-700 dark:text-white">
              Is the cost of the appoinment covered by private health
              insurance?
            </h1>

            <span className="rounded-full bg-blue-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="rounded-lg border-2 border-gray-100 dark:border-gray-700">
          <button className="flex w-full items-center justify-between p-8">
            <h1 className="font-semibold text-gray-700 dark:text-white">
              Do i need a referral?
            </h1>

            <span className="rounded-full bg-blue-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="rounded-lg border-2 border-gray-100 dark:border-gray-700">
          <button className="flex w-full items-center justify-between p-8">
            <h1 className="font-semibold text-gray-700 dark:text-white">
              What are your opening house?
            </h1>

            <span className="rounded-full bg-blue-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="rounded-lg border-2 border-gray-100 dark:border-gray-700">
          <button className="flex w-full items-center justify-between p-8">
            <h1 className="font-semibold text-gray-700 dark:text-white">
              What can i expect at my first consultation?
            </h1>

            <span className="rounded-full bg-blue-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>

  )
}

export default FaqSection
