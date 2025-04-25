import { TraitDescription } from "./traits";
import { TraitScores } from "./traits";
import {
  PersonalityDescription,
  RelationshipCompatibility,
  GrowthJourney,
  ActionItem,
  DailyHabits,
  ValuesAndMotivators,
  CommunityConnection,
  CareerPathFull,
  CareerPathFree,
} from "./personalityDatabase";

export interface FullResultData {
  username: string | null;
  firstname: string | null;
  personalityType: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
  traitScores: TraitScores | null;
  personalityData: FullPersonalityDatabase;
}

export interface FreeResultData {
  username: string | null;
  firstname: string | null;
  personalityType: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
  traitScores: TraitScores | null;
  personalityData: FreePersonalityDatabase;
}

export interface FullPersonalityDatabase {
  valuesAndMotivators: ValuesAndMotivators;
  career: CareerPathFull;
  relationships: RelationshipCompatibility[];
  growth: GrowthJourney;
  dailyHabits: DailyHabits;
  communityConnection: CommunityConnection;
  actionItems: ActionItem[];
}

export interface FreePersonalityDatabase {
  valuesAndMotivators: ValuesAndMotivators;
  career: CareerPathFree;
}
