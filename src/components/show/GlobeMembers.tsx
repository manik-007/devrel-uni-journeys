import { Suspense, useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Linkedin, Twitter, MapPin, X } from "lucide-react";

import asilbek from "@/assets/guests/asilbek.jpg";
import lupe from "@/assets/guests/lupe.jpg";
import surya from "@/assets/guests/surya.jpg";
import atharva from "@/assets/guests/atharva.jpg";
import jay from "@/assets/guests/jay.jpg";
import purple from "@/assets/guests/purple.jpg";
import yerang from "@/assets/guests/yerang.jpg";
import alex from "@/assets/guests/alex.jpg";
import dayana from "@/assets/guests/dayana.jpg";
import parul from "@/assets/guests/parul.jpg";
import hardik from "@/assets/guests/hardik.jpg";
import kevin from "@/assets/guests/kevin.jpg";
import hilina from "@/assets/guests/hilina.jpg";
import gopika from "@/assets/guests/gopika.jpg";
import mahima from "@/assets/guests/mahima.jpg";
import akhil from "@/assets/guests/akhil.jpg";
import henry from "@/assets/guests/henry.jpg";

type Member = {
  name: string;
  role: string;
  location: string;
  lat: number;
  lng: number;
  image: string;
  linkedin: string;
  twitter?: string;
};

const members: Member[] = [
  { name: "Asilbek Abdullaev", role: "Cloud & DevOps @ EPAM", location: "Tashkent, Uzbekistan", lat: 41.31, lng: 69.24, image: asilbek, linkedin: "https://www.linkedin.com/in/asilbek0311/", twitter: "https://x.com/asil_beck" },
  { name: "Lupe Canaviri Maydana", role: "Ex-Frontend @ Microsoft", location: "Seattle, USA", lat: 47.6, lng: -122.3, image: lupe, linkedin: "https://www.linkedin.com/in/luucamay/", twitter: "https://x.com/luucamay_" },
  { name: "Surya Gupta", role: "Growth @ Mizzle", location: "New Delhi, India", lat: 28.6, lng: 77.2, image: surya, linkedin: "https://www.linkedin.com/in/surya-gupta-ai/", twitter: "https://x.com/surya_web3" },
  { name: "Atharva Shah", role: "DevRel @ AccuKnox", location: "Pune, India", lat: 18.5, lng: 73.85, image: atharva, linkedin: "https://www.linkedin.com/in/atharva-shah-tech/" },
  { name: "Jay Makwana", role: "Smart Contract Dev @ ZeroCodeLabs", location: "Mumbai, India", lat: 19.07, lng: 72.87, image: jay, linkedin: "https://www.linkedin.com/in/jay-makwana-313b411a5/" },
  { name: "Yerang Kim", role: "Secretary @ PUAC NE Chapter", location: "Berlin, Germany", lat: 52.52, lng: 13.4, image: yerang, linkedin: "https://www.linkedin.com/in/yerang-kim/" },
  { name: "Alex Stoicescu", role: "Advisor @ Claimr", location: "Berlin, Germany", lat: 52.53, lng: 13.42, image: alex, linkedin: "https://www.linkedin.com/in/alexstoicescu/", twitter: "https://x.com/st0icescu" },
  { name: "Dayana Mick Forero", role: "Fellow @ Dev3Pack", location: "Berlin, Germany", lat: 52.51, lng: 13.38, image: dayana, linkedin: "https://www.linkedin.com/in/dayanamick/", twitter: "https://x.com/AydaMacink" },
  { name: "Purple Zhang", role: "DevRel @ SECBIT Labs", location: "Suzhou, China", lat: 31.3, lng: 120.6, image: purple, linkedin: "https://www.linkedin.com/in/purple-zhang-7b0673180/", twitter: "https://x.com/ziyinlox" },
  { name: "Parul Yadav", role: "DevRel @ Kleros", location: "India", lat: 22.0, lng: 78.9, image: parul, linkedin: "https://www.linkedin.com/in/parulyadav18/" },
  { name: "Hardik Bandhiya", role: "AWS Campus Leader", location: "Junagarh, India", lat: 21.52, lng: 70.45, image: hardik, linkedin: "https://www.linkedin.com/in/bandhiya-hardik/", twitter: "https://x.com/bandhiyahardik8" },
  { name: "Hilina Damte", role: "Partner @ PayWay", location: "Addis Ababa, Ethiopia", lat: 9.03, lng: 38.74, image: hilina, linkedin: "https://www.linkedin.com/in/hilina-damte-532751158/", twitter: "https://x.com/decentralizeEA" },
  { name: "Kevin Padilla Islas", role: "CTO @ EVVM", location: "Puebla, Mexico", lat: 19.04, lng: -98.2, image: kevin, linkedin: "https://www.linkedin.com/in/kevin-padilla-islas/", twitter: "https://x.com/jistro" },
  { name: "Mahima Thacker", role: "SheFi 11 · Ambassador @ Cyfrin", location: "Bhuj, India", lat: 23.25, lng: 69.66, image: mahima, linkedin: "https://www.linkedin.com/in/mahima-thacker-b696b1217/", twitter: "https://x.com/mahima_thacker" },
  { name: "Gopika Chauhan", role: "Builder · DevRel Uni C7", location: "Karnal, India", lat: 29.69, lng: 76.99, image: gopika, linkedin: "https://www.linkedin.com/in/gopika-chauhan18/", twitter: "https://x.com/okgopika" },
  { name: "Akhil Nanavati", role: "Builder · Web3", location: "Mumbai, India", lat: 19.08, lng: 72.88, image: akhil, linkedin: "https://www.linkedin.com/in/akhil-nanavati-386867190/", twitter: "https://x.com/akhilnanavati" },
  { name: "Henry Tong", role: "Web3 Builder", location: "Mendoza, Argentina", lat: -32.89, lng: -68.84, image: henry, linkedin: "https://www.linkedin.com/in/henry-tong-info/" },
];

const RADIUS = 2;
const DOT_COLOR = "#0f6b3a";
const DOT_ACTIVE_COLOR = "#15a04f";

function latLngToVec3(lat: number, lng: number, r = RADIUS) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(r * Math.sin(phi) * Math.cos(theta));
  const z = r * Math.sin(phi) * Math.sin(theta);
  const y = r * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function GlobeSurface() {
  const earthTexture = useTexture(
    "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
  );

  useEffect(() => {
    if (earthTexture) {
      // @ts-expect-error newer three uses colorSpace
      earthTexture.colorSpace = THREE.SRGBColorSpace ?? earthTexture.colorSpace;
      earthTexture.anisotropy = 8;
      earthTexture.needsUpdate = true;
    }
  }, [earthTexture]);

  return (
    <>
      <mesh>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          emissive={new THREE.Color("#ffffff")}
          emissiveMap={earthTexture}
          emissiveIntensity={0.35}
          roughness={0.65}
          metalness={0.05}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[RADIUS * 1.03, 64, 64]} />
        <meshBasicMaterial
          color="#7cffb4"
          transparent
          opacity={0.07}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}

function MemberDot({
  member,
  onSelect,
  isActive,
}: {
  member: Member;
  onSelect: (m: Member) => void;
  isActive: boolean;
}) {
  const pos = useMemo(() => latLngToVec3(member.lat, member.lng, RADIUS * 1.015), [member]);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const s = 1 + Math.sin(clock.elapsedTime * 2 + member.lat) * 0.15;
      ringRef.current.scale.setScalar(s);
    }
  });

  const quat = useMemo(() => {
    const up = new THREE.Vector3(0, 1, 0);
    const dir = pos.clone().normalize();
    return new THREE.Quaternion().setFromUnitVectors(up, dir);
  }, [pos]);

  return (
    <group position={pos} quaternion={quat}>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          onSelect(member);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "";
        }}
      >
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={isActive ? DOT_ACTIVE_COLOR : DOT_COLOR} />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.07, 0.1, 24]} />
        <meshBasicMaterial color={DOT_ACTIVE_COLOR} transparent opacity={0.75} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Scene({
  active,
  setActive,
}: {
  active: Member | null;
  setActive: (m: Member | null) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current && !active) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[5, 3, 5]} intensity={1.6} />
      <directionalLight position={[-5, -2, -3]} intensity={0.4} />
      <group ref={groupRef}>
        <GlobeSurface />
        {members.map((m) => (
          <MemberDot
            key={m.name}
            member={m}
            onSelect={setActive}
            isActive={active?.name === m.name}
          />
        ))}
        {active && (
          <Html
            position={latLngToVec3(active.lat, active.lng, RADIUS * 1.25)}
            center
            distanceFactor={6}
            zIndexRange={[100, 0]}
            style={{ pointerEvents: "none" }}
          >
            <div className="pointer-events-auto w-64 rounded-xl border border-primary/40 bg-card/95 backdrop-blur p-4 shadow-[var(--shadow-glow)] animate-scale-in">
              <button
                onClick={() => setActive(null)}
                className="absolute top-2 right-2 text-muted-foreground hover:text-primary"
                aria-label="Close"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="flex items-center gap-3">
                <img src={active.image} alt={active.name} className="h-12 w-12 rounded-full object-cover border border-primary/40" />
                <div className="min-w-0">
                  <div className="font-bold text-sm truncate">{active.name}</div>
                  <div className="text-xs text-primary truncate">{active.role}</div>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> {active.location}
              </div>
              <div className="mt-3 flex items-center gap-3 text-xs">
                <a href={active.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
                {active.twitter && (
                  <a href={active.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary">
                    <Twitter className="h-3.5 w-3.5" /> X
                  </a>
                )}
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
}

export function GlobeMembers() {
  const [active, setActive] = useState<Member | null>(null);

  return (
    <section id="globe" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-primary">Around the world</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            The map of our guests
          </h2>
          <p className="mt-4 text-muted-foreground">
            Spin the globe and click a green pin to meet the guest who calls that country home.
          </p>
        </div>

        <div className="mt-12 relative rounded-2xl border border-border bg-card overflow-hidden h-[420px] sm:h-[520px] md:h-[600px]">
          <Canvas
            camera={{ position: [0, 0, 5.5], fov: 45 }}
            dpr={[1, 2]}
            gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.25 }}
          >
            <Suspense fallback={null}>
              <Scene active={active} setActive={setActive} />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                rotateSpeed={0.6}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={(3 * Math.PI) / 4}
              />
            </Suspense>
          </Canvas>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,var(--background)_100%)]" />
        </div>
      </div>
    </section>
  );
}
