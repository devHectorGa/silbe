export * from "./SectionsWave";

import { Waves as WavesComponent, SVGContainer } from "./Waves";

type TWaves = typeof WavesComponent;

interface IWaves extends TWaves {
  SVGContainer: typeof SVGContainer;
}

const Waves = WavesComponent as IWaves;
Waves.SVGContainer = SVGContainer;

export { Waves };
