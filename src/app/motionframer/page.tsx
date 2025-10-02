import { AvatarGroup, Avatar,AvatarGroupTooltip,AvatarFallback } from "@/components/animate-ui/primitives/animate/avatar-group";
import { Button } from "@/components/animate-ui/primitives/buttons/button";

export default function FramerMotion() {
  const AVATARS = [
  {
    src: '',
    fallback: 'SK',
    tooltip: 'Skyleen',
  },
  
  {
    src: '',
    fallback: 'CN',
    tooltip: 'Shadcn',
  },
  {
    src: '',
    fallback: 'AW',
    tooltip: 'Adam Wathan',
  },
  {
    src: '',
    fallback: 'GR',
    tooltip: 'Guillermo Rauch',
  },
  {
    src: '',
    fallback: 'JH',
    tooltip: 'Jhey',
  },
  {
    src: '',
    fallback: 'DH',
    tooltip: 'David Haz',
  },
]
  return (
    <div className="flex flex-1 h-screen bg-black items-center justify-around relative text-white">
      <Button
        className="bg-white text-black p-2"
        initial={{ translateY: -20 }}
        animate={{ translateY: 0 }}
        transition={{ type: "spring" }}
        whileHover={{ background: "red" }}
      >
        This is Annimated button
      </Button>
      <div className="flex flex-col gap-6 items-center justify-center abolute top-0">
        <div className="bg-[#e45ca5] h-[300px] w-[300px]">
          <div className="w-[100px] h-[100px] bg-pink-800"></div>
        </div>
      </div>
      <AvatarGroup>
        {AVATARS.map((items,index)=>(
          <Avatar key={index}>
          <AvatarImage src={Avatar.src}/>
           <AvatarFallback>{AVATARS.fallback}</AvatarFallback>
      <AvatarGroupTooltip>{AVATARS.tooltip}</AvatarGroupTooltip>

          </Avatar>

        ))}
      </AvatarGroup>
    </div>
  );
}
