import { useEffect } from "react";
import {MENU_API} from "../utils/constants.js";

const useResturantMenu = (resID) => {
    //fetch Data

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const response = await fetch(`${MENU_API}${resID}`);
        const data = await response.json();
        console.log(data);
        setResInfo(data.response);
    }

    return resInfo
}

export default useResturantMenu;

// Now we can use this hook in any component.
// 

