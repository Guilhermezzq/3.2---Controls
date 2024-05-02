
import { Image, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

const Images = () => {

    const { width, height } = useThree((state) => state.viewport);

    const scroll = useScroll(); //  O que vou fazer é aumentar o zoom das imagens quando eu rolar.

    const groupRef = useRef(); // Referência para o atribulo ref no group

    useFrame(() => {
         groupRef.current.children[0].material.zoom = 1 + scroll.range(0, 0.33) / 3; // Então, quero retornar um valor entre 0 e 1 terço e então vou dividir esta parte por três.

        // Portanto, o método range nos dará um valor de 0 a 1.
        // O valor começará de zero e aumentará gradualmente até um dependendo do que escrevermos no intervalo método.
        
        // O valor começará de zero e aumentará gradualmente até um dependendo do que escrevermos no intervalo  método.
        //   No primeiro campo escrevemos zero, o que significa que o valor começará do zero quando a rolagem barra na posição igual a zero. 
        // A posição da barra de rolagem será igual a zero na posição inicial quando não iniciamos a rolagem.
        //  No segundo campo escrevemos oh ponto 33, o que significa que o valor chegará a um quando chegarmos
        // um terço da distância de rolagem, que é aproximadamente aqui.
        groupRef.current.children[1].material.zoom = 1 + scroll.range(0.33, 0.33); 

        groupRef.current.children[2].material.zoom = 1 + scroll.range(0.33, 0.33); 

        groupRef.current.children[3].material.zoom = 1 + scroll.range(0.33, 0.33); 

        groupRef.current.children[4].material.zoom = 1 + scroll.range(0.66, 0.33) / 3;

        groupRef.current.children[4].material.grayscale = 1 - scroll.range(2 / 3., 1 / 3) ; // ao invés de utilizar 0.66 ou 0.33

        groupRef.current.children[5].material.zoom = 2 - scroll.range(2 / 3., 1 / 3) ;
        
    });

    

  return (
    <>

    
    {/* Este auxiliar é basicamente uma malha simples, e a imagem que fornecemos ao auxiliar de imagem cobrirá toda a malha.
     Algo semelhante a adicionar uma textura a uma malha simples usando o atributo map.*/}

     <group  ref={groupRef} >
        <Image
         url="./images/1.jpg" 
         scale={[4, height, 1]} 
         position={[-3, 0, 0]}
         zoom={1}
         
         />

        <Image
            position={[-2.4, -height, 2]}
            scale={[1, 3, 1]}
            url="./images/2.jpg"
        />
        <Image
            position={[-0.6, -height, 3]}
            scale={[1, 2, 1]}
            url="./images/3.jpg"
            grayscale={1} // Quando for zero, não haverá mudança mas quando valor for 1 ficará cinza 
        />
        <Image position={[0.75, -height, 3.5]} scale={1.5} url="./images/4.jpg" />
        <Image
            position={[0, -height * 1.5, 2.5]}
            scale={[1.5, 3, 1]}
            url="./images/5.jpg"
            grayscale={1}
            zoom={1} // Também temos o atributo zoom, que aumentará ou diminuirá o zoom da imagem. O valor padrão é um.
        />
        <Image
            position={[0, -height * 2 - height / 4, 0]}
            scale={[width, height / 2, 1]}
            url="./images/6.jpg"
            
        />
     </group>




    </>
  )
}

export default Images;
