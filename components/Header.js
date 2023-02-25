import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

function Header() {
    return (
        <div className="bg-gray-700 to-gray-200 flex flex-col items-center p-6 select-none sm:flex-row ">
            <div className="flex ">
                <HeaderIcon Icon={HomeIcon} Title="Home" />
                <HeaderIcon Icon={UserIcon} Title="Account" />
                <HeaderIcon Icon={PhoneIcon} Title="Contact" />
                <HeaderIcon Icon={InformationCircleIcon} Title="About" />
            </div>
            <Image
                width={100}
                height={100}
                alt="image"
                className="cursor-pointer active:brightness-110"
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
            />
        </div>
    );
}
export default Header;
