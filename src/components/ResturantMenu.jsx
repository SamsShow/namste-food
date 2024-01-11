import useResturantMenu from "../utils/useResturantMenu";
import { Params } from "react-router-dom";


const ResturantMenu = () => {
    const {resID} = useParams();

    const {resInfo} = useResturantMenu(resID);

    const { name, cuisines, thumb, location, timings, highlights, currency, average_cost_for_two, menu_url } = resInfo?.cards[0]?.card?.card?.info;

    const { dishes } = resInfo?.cards[0]?.card?.card?.sections[0]?.section?.section;

    return(
        <div>
            <h1>Name of the resturnat</h1>
            <h2>Menue</h2>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </div>
    )
}

export default ResturantMenu;