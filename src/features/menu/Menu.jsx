import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <>
      <h1>Menu</h1>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza?.id} />
      ))}
    </>
  );
}

export default Menu;

export async function loader() {
  const menu = await getMenu();
  return menu;
}
