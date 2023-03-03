const ContactForm = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 " style={{ width: "80%" }}>
        <div className="py-8 lg:py-16 px-4 mx-auto w-full">
          <h2 className="mb-10 text-2xl font-bold tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>

          <form action="#" className="space-y-8 text-xl ">
            <div className="pb-10">
              <label
                for="email"
                className="block mb-5 font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-5  sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="pb-10">
              <label
                for="subject"
                className="block mb-5 text-sm font-medium text-gray-900 dark:text-gray-300 mb-5"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-5 sm:p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2 mb-10">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-5 sm:p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button class="bg-blue-500 text-xs lg:text-lg px-1 py-2 lg:px-8 lg:py-3 text-white rounded-lg font-medium w-fit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
