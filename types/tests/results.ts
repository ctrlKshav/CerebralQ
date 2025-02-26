export interface TraitScore {
    left: number
    right: number
    leftPercentage: number
    rightPercentage: number
    dominant: "left" | "right"
  }
  
  export interface TraitScores {
    "E-I": TraitScore
    "S-N": TraitScore
    "T-F": TraitScore
    "J-P": TraitScore
  }
  
  export interface TraitDescription {
    title: string
    leftLabel: string
    rightLabel: string
    description: string
    color: string
  }
  
  export interface TraitDescriptions {
    [key: string]: TraitDescription
  }
  
  