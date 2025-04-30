import { OceanTraitScores } from "./traits";

// Interface for the SLOAN type result
export interface CalculatedOceanResult {
  sloanCode: string;
  traitScores: OceanTraitScores
}
