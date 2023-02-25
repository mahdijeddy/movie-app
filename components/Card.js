import { HandThumbUpIcon } from "@heroicons/react/24/outline";

function Card({ res }) {
    const BASER_URL = "https://image.tmdb.org/t/p/original";
    return (
        <div
            className="p-3 cursor-pointer bg-gray-300 hover:text-white active:text-red-400 xl:hover:scale-105 transition-transform 
         duration-200 md:hover:scale-105 "
        >
            <img className="w-full h-72" src={BASER_URL + res.backdrop_path} />
            <div className="p-2">
                <p className="truncate text-lg">{res.overview}</p>
                <h2 className="text-lg font-bold">{res.title || res.name}</h2>
                <p className="flex items-center">
                    {res.first_air_date || res.release_date}
                    <HandThumbUpIcon className="h-5" />
                    {res.vote_count}
                </p>
            </div>
        </div>
    );
}

export default Card;
