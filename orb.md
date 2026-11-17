bunx shadcn@latest add zzzzshawn/orbkit/shdr-24

Demo Usage
import { Shdr24 } from "@/components/ui/shdr-24";
export function Example() {
  return <Shdr24 />;
}

Example usage

Every prop
Preview
import { Shdr24 } from "@/components/ui/shdr-24";
export function Example() {
  return (
    <Shdr24
      size={280}
      state="speaking"
      params={{ spin: 0.34 }}
      colors={{ grass: "#6abe30" }}
      stateColors={{
        idle: { grass: "#6abe30" },
        thinking: { grass: "#6abe30" },
        speaking: { grass: "#6abe30" }
      }}
      statePresets={{
        idle: { spin: 0.22 },
        thinking: { spin: 0.34 },
        speaking: { spin: 0.46 }
      }}
      stateVolumes={{
        idle: { input: 0, output: 0.2 },
        thinking: { input: 0.1, output: 0.45 },
        speaking: { input: 0.2, output: 0.8 }
      }}
      volumes={{ input: 0, output: 0.6 }}
      wrapper="ring"
      wrapperColor="currentColor"
      paused={false}
      pauseOffscreen
      maxDpr={1.5}
      ariaLabel="Assistant status"
    />
  );
}

Component props

Prop
Type
Default
Notes
size	number	280	Rendered diameter in CSS pixels.
state	"idle" | "thinking" | "speaking"	"idle"	Drives the synthesized volume signals.
params	Partial<Record<string, number>>	—	Any key here overrides the state preset for that param.
colors	Partial<Record<string, string>>	—	Hex overrides, where the orb declares colors.
paused	boolean	false	Freeze on the current frame.
pauseOffscreen	boolean	true	Stop rendering while scrolled out of view.
maxDpr	number	2	Device-pixel-ratio ceiling.
wrapper	OrbWrapper	"none"	Decoration drawn around the orb: none, glass, ring, dotted, ticks, reticle, grid, halftone, scanlines.
wrapperColor	string	"currentColor"	What the wrapper draws its lines in. Glass ignores it.
className	string	—	Applied to the outermost element.
style	CSSProperties	—	Merged onto the outermost element's style.
ariaLabel	string	—	When set the orb is role=img; otherwise it is aria-hidden.
Shader parameters

Pass any subset through params; anything you leave out follows the active state's preset.

Key
Label
Range
Default
spin	Spin	0 – 5	0.22
tilt	Tilt	0 – 4	0.45
drift	Terrain drift	0 – 10	0.12
season	Season rate	0 – 10	0.3
shuffle	Ember rate	0 – 20	0.8
radius	Radius	0.15 – 3	1.15
blocks	Blocks	16 – 96	64
rough	Mountains	0 – 0.8	0.45
scale	Terrain scale	0.5 – 8	2.4
sea	Sea level	0 – 1	0.5
trees	Trees	0 – 1	0.75
cave	Caves	0 – 1	0.4
ore	Ore density	0 – 0.6	0.12
glow	Ore glow	0 – 5	0.9
core	Molten core	0 – 1	0.5
texture	Texture grain	0 – 1	0.6
light	Key light	0 – 3	1
gain	Gain	0.05 – 5	1
contrast	Contrast	0.15 – 10	1
Colors

Pass any subset through colors as hex strings.

Key
Label
Default
grass	Grass	
#6abe30
dirt	Mud	
#6f4a2f
stone	Stone	
#8a8a90
sand	Sand	
#dbcf9c
water	Water	
#2f66d0
leaf	Leaves	
#3e8f27
ore	Ore	
#4de3ff
lava	Lava	
#ff7b26