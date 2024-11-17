type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type typeInfo = Pick<AllType, "name" | "position" | "color" | "weight">;

function compare(top: typeInfo, bottom: typeInfo): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
