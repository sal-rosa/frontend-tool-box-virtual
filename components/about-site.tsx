function AboutSite() {
    return (
        <div className="py-18 px-5">
            <div className="flex lg:flex-nowrap flex-wrap gap-5 justify-between">
                <div className="card bg-base-200 shadow-xl w-full">
                    <div className="card-body">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-lg font-medium title-font mb-2">Safety</h2>
                        <p className="leading-relaxed text-base">
                            Your files are automatically deleted from our servers a few minutes after the conversion is complete. Nobody has access to them except you.
                        </p>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl w-full">
                    <div className="card-body p-6 rounded-lg">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-lg font-medium title-font mb-2">Free</h2>
                        <p className="leading-relaxed text-base">
                            You don't need to pay anything to use any tools, nor do you need to create an account or login to start using them.
                        </p>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl w-full">
                    <div className="card-body p-6 rounded-lg">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-lg font-medium title-font mb-2">Limitless</h2>
                        <p className="leading-relaxed text-base">
                            There is no limit to how many times you can use the app's features, use any feature as many times as you want.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSite;