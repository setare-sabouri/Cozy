import { Fire } from '@wolffo/three-fire/react'
import { useStore } from '../../Store/useStore'

const FireCmp = () => {
    const { color } = useStore()
    return (
        <Fire
            // ref={fireRef.ref}
            texture="/Textures/fire.png"
            color={color}
            scale={[3, 3, 2]}
            position={[0, 1.4, 0]}
            magnitude={1.4}
            lacunarity={2}
            onUpdate={(fire, time) => {
                const slowTime = time * 0.5 // smaller = slower
                fire.update(slowTime)
            }}
        />
    )
}

export default FireCmp
