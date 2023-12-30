import { useLocation } from "react-router-dom";


const Error = () => {
    const er = useLocation();
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-red-500 text-4xl mb-8">Oops!</h1>
                <p className="text-2xl mb-8">Something went wrong.</p>
                <p className="text-lg mb-8">Please try again later.</p>
                <h3 className="text-red-500 font-bold">
                    {er.status}: {er.message}
                </h3>
            </div>
        </div>
    );
};

export default Error;
