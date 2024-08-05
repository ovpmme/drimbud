import TopbarUA from "./header/topbar";
import NavbarUA from "./header/navbar";

export default function HeaderUA() {
    return(
        <div
            className="
                z-20

                sticky

                top-0
            "
        >
            <TopbarUA/>
            <NavbarUA/>
        </div>
    );
}
