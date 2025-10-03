import { Leva, useControls } from "leva";
import { useStore } from "../Store/useStore";



export default function LevaControls() {

    const { color,setColor, setMagnitude } = useStore()


    useControls("3D Controls", {
        Color: {
            value: color,
            onChange: (value) => setColor(value),
        },

        Magnitude: {
            value: 1,
            min: 0.1,
            max: 10,
            step: 0.1,
            onChange: (value) => setMagnitude(value),
        },

    });



    return <Leva collapsed />
}