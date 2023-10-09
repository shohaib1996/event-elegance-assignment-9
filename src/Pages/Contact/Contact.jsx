import toast from "react-hot-toast";


const Contact = () => {
    const handleContact = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;
        console.log(email, subject, message);
        e.target.reset()
        toast.success("Message sent Successfully")

    }
    return (
        <div className="max-w-screen-md mx-auto h-[90vh] mt-12 p-3 lg:p-0">
            <form  onSubmit={handleContact} className="mb-6 text-xl font-bold">
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="subject"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name= "subject"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Let us know how we can help you"
                        required=""
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your message..."
                        defaultValue={""}
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-fuchsia-600 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
                >
                    Send message
                </button>
            </form>
        </div>

    );
};

export default Contact;