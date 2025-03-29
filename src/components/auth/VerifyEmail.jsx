export const VerifyEmail = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <div className="mb-6">
                <svg
                    className="w-16 h-16 text-blue-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Verify Your Email</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                We've sent a verification link to your email address. Please check your inbox and click the link to activate your account.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
                Didn't receive the email?{' '}
                <button className="text-blue-500 hover:underline">Resend Verification</button>
            </p>
        </div>
    );
};