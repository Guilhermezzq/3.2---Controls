import { Scroll, ScrollControls, useGLTF } from "@react-three/drei"
import Images from "./Images";



const ScrollControl = () => {

    const model = useGLTF("./model/model.gltf"); 
 
    return (
    <>
    <ambientLight />
    <directionalLight />

    <ScrollControls 
    pages={3} // Decidir quanto podemos rolar , valor padrão = 1
    damping={0.4} // Agora, quando rolamos, percebemos que não chegamos imediatamente à parte da página a um atraso.
    infinite={true} // Rolagem infinita 
     >
        <Scroll>

            
            <Images />
            {/* Decidir se queremos adicionar conteúdo 3D como mesh/malha ou modelos , ou conteúdo HTML com div e img */}
           <primitive
            object={model.scene}
            position={[1.5, -1, 0]} // Alterar a posição
            scale={0.5}
            />
        </Scroll>

        <Scroll
        html 
        >

          <h1 style={{ position: "absolute", top: "60vh", left: "0.5em" }}>
            to
          </h1>
          <h1 style={{ position: "absolute", top: "120vh", left: "60vw" }}>
            be
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "198.5vh",
              left: "0.5vw",
              fontSize: "40vw",
            }}
          >
            home
          </h1>

        </Scroll>

    </ScrollControls>
    </>
  )
}

export default ScrollControl;
