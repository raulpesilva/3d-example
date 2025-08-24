import Feature from '@/components/feature-one';
import Footer from '@/components/footer-two';
import Header from '@/components/Header';
import { useSelectedHouse, useSelectedHouseSelect } from '@/states';
import { Bvh, useGLTF } from '@react-three/drei';
import { Canvas, useFrame, useThree, type ThreeEvent } from '@react-three/fiber';
import { EffectComposer, Outline, Select, Selection } from '@react-three/postprocessing';
import { debounce } from 'lodash';
import { easing } from 'maath';
import { useCallback, useState } from 'react';
import Balancer from 'react-wrap-balancer';

function Effects() {
  const { size } = useThree();
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [1 - state.pointer.x, 10 + state.pointer.y / 2, 20 + Math.atan(state.pointer.x * 2)],
      0.3,
      delta
    );
    state.camera.lookAt(state.camera.position.x * 0.9, 0, -4);
  });
  return (
    <EffectComposer stencilBuffer autoClear={false} multisampling={4}>
      {/* <N8AO halfRes aoSamples={5} aoRadius={0.4} distanceFalloff={0.75} intensity={1} /> */}
      <Outline blur width={size.width * 1.25} edgeStrength={10} />
      {/* <TiltShift2 samples={5} blur={0.1} /> */}
      {/* <ToneMapping /> */}
    </EffectComposer>
  );
}

function Box() {
  const { nodes, materials } = useGLTF('/reexporthouse.gltf', true);
  const [hovered, hover] = useState<string | null>(null);
  const [clicked, setClicked] = useSelectedHouse();
  const debouncedHover = useCallback(() => debounce(hover, 30), [hover]);
  const over = (name: string) => (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    debouncedHover()(name);
  };
  const out = () => debouncedHover()(null);
  const click = (name: string) => (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setClicked((prev) => (prev === name ? null : name));
  };

  return (
    <group>
      <primitive object={nodes.Node_1} material={materials.floor_1} />
      <primitive object={nodes.Node_3} material={materials.floor_2} />
      <primitive object={nodes.Node_5} material={materials.floor_1} />
      <Select
        enabled={hovered === '0' || clicked === '0'}
        onPointerDown={click('0')}
        onPointerOver={over('0')}
        onPointerOut={out}
      >
        <primitive object={nodes.Node_7} material={materials.box_1} />
      </Select>
      <Select
        enabled={hovered === '1' || clicked === '1'}
        onPointerDown={click('1')}
        onPointerOver={over('1')}
        onPointerOut={out}
      >
        <primitive object={nodes.Node_9} material={materials.box_1} />
      </Select>
      <Select
        enabled={hovered === '2' || clicked === '2'}
        onPointerDown={click('2')}
        onPointerOver={over('2')}
        onPointerOut={out}
      >
        <primitive object={nodes.Node_11} material={materials.box_1} />
      </Select>
      <Select
        enabled={hovered === '3' || clicked === '3'}
        onPointerDown={click('3')}
        onPointerOver={over('3')}
        onPointerOut={out}
      >
        <primitive object={nodes.Node_13} material={materials.box_1} />
      </Select>
      <Select
        enabled={hovered === '4' || clicked === '4'}
        onPointerDown={click('4')}
        onPointerOver={over('4')}
        onPointerOut={out}
      >
        <primitive object={nodes.Node_15} material={materials.box_1} />
      </Select>
      <Select
        enabled={hovered === '5' || clicked === '5'}
        onPointerDown={click('5')}
        onPointerOver={over('5')}
        onPointerOut={out}
      >
        <primitive object={nodes.Node_17} material={materials.box_1} />
      </Select>
      <Select
        enabled={hovered === '6' || clicked === '6'}
        onPointerDown={click('6')}
        onPointerOver={over('6')}
        onPointerOut={out}
      >
        <primitive object={nodes.Node_19} material={materials.box_1} />
      </Select>
    </group>
  );
}

export const Fixed = () => {
  const selectedHouse = useSelectedHouseSelect();
  return (
    <>
      <Header />
      <div style={{ flex: 1, display: 'flex', minHeight: 'calc(100vh - 228px)' }}>
        <div style={{ flex: 1 }}>
          <Canvas camera={{ position: [0, 50, 60], fov: 25, near: 1, far: 70 }}>
            <ambientLight intensity={1.5 * Math.PI} />
            <directionalLight color="white" position={[0, 5, 5]} />
            {/* <OrbitControls /> */}
            <Bvh firstHitOnly>
              <Selection>
                <Effects />
                <Box />
              </Selection>
            </Bvh>
            {/* <Stats /> */}
          </Canvas>
        </div>
        <div style={{ flex: 1 }}>
          {selectedHouse === null && (
            <>
              <h3 className="text-4xl">
                <Balancer>Selecione uma casa</Balancer>
              </h3>
            </>
          )}
          {selectedHouse === '0' && (
            <>
              <h3 className="text-4xl">
                <Balancer>Casa 0 selecionada</Balancer>
              </h3>
              <h4 className="text-xl text-primary">Detalhes</h4>
              <p className="text-base opacity-75">Esta é a casa 0, localizada na zona 1.</p>
              <p className="text-base opacity-75">Descrição: Uma casa espaçosa com 3 quartos e 2 banheiros.</p>
              <p className="text-base opacity-75">Preço: $300,000</p>
            </>
          )}
          {selectedHouse === '1' && (
            <>
              <h3 className="text-4xl">
                <Balancer>Casa 1 selecionada</Balancer>
              </h3>
              <h4 className="text-xl text-primary">Detalhes</h4>
              <p className="text-base opacity-75">Esta é a casa 1, localizada na zona 2.</p>
              <p className="text-base opacity-75">Descrição: Uma casa moderna com 4 quartos e 3 banheiros.</p>
              <p className="text-base opacity-75">Preço: $400,000</p>
            </>
          )}
          {selectedHouse === '2' && (
            <>
              <h3 className="text-4xl">
                <Balancer>Casa 2 selecionada</Balancer>
              </h3>
              <h4 className="text-xl text-primary">Detalhes</h4>
              <p className="text-base opacity-75">Esta é a casa 2, localizada na zona 3.</p>
              <p className="text-base opacity-75">Descrição: Uma casa aconchegante com 2 quartos e 1 banheiro.</p>
              <p className="text-base opacity-75">Preço: $250,000</p>
            </>
          )}
          {selectedHouse === '3' && (
            <>
              <h3 className="text-4xl">
                <Balancer>Casa 3 selecionada</Balancer>
              </h3>
              <h4 className="text-xl text-primary">Detalhes</h4>
              <p className="text-base opacity-75">Esta é a casa 3, localizada na zona 4.</p>
              <p className="text-base opacity-75">Descrição: Uma casa elegante com 5 quartos e 4 banheiros.</p>
              <p className="text-base opacity-75">Preço: $500,000</p>
            </>
          )}
        </div>
      </div>
      <Feature />
      <Footer />
    </>
  );
};

