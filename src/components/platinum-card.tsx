import { Html } from "@react-three/drei";
import { FC } from "react";
import { sizes } from "../constants/sizes";

const data = {
  id: "NPWR00499_00",
  title: "Mirror's Edge™",
  description: "-",
  platforms: ["PS3"],
  image_url:
    "https://image.api.playstation.com/trophy/np/NPWR00499_00_004D6772B970ADF48444B24EBB543A07BCB6F691FC/21DB0E0685CCE98AEA9CD73F8CFBA7C5056D3361.PNG",
  counts: { bronze: 36, silver: 10, gold: 4, platinum: 1 },
  earned_counts: { bronze: 36, silver: 10, gold: 4, platinum: 1 },
  progress: 100,
  completion: "platinum",
  trophy: {
    type: "platinum",
    title: "Over the Edge",
    description: "Unlock all other trophies",
    image_url:
      "https://image.api.playstation.com/trophy/np/NPWR00499_00_004D6772B970ADF48444B24EBB543A07BCB6F691FC/3D25204B4651EFC31D7CD61562D34516345A17ED.PNG",
    earned_at: "2024-04-12T07:50:40Z",
    earned_rate: 0.9,
    rarity: "ultra-rare",
    rarity_label: "Ultra Rare",
  },
};

const PlatinumCard: FC = () => {
  return (
    <Html
      className="pointer-events-none flex gap-5 rounded bg-white/75 px-3 py-2 select-none"
      transform
      position={[0, 0, sizes.display[2] / 2]}>
      <div className="flex flex-col justify-center">
        <p>{data.title}</p>
        <p>{data.platforms.join(", ")}</p>
        <p>{new Date(data.trophy.earned_at).toLocaleDateString()}</p>
      </div>
      <img className="size-20 min-w-20" src={data.trophy.image_url} />
    </Html>
  );
};

export default PlatinumCard;
