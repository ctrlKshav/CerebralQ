import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { ActionStepItem } from "@/types/tests/mbti/personalityDatabase";
import { getThemeColors } from "../PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";

interface PDFActionPlanSectionProps {
  actionSteps: ActionStepItem[];
  firstname: string | null;
  isDarkMode?: boolean;
}

const PDFActionPlanSection: React.FC<PDFActionPlanSectionProps> = ({
  actionSteps,
  firstname,
  isDarkMode = false,
}) => {
  const styles = createActionPlanStyles(isDarkMode);

  const defaultActionSteps = [
    {
      number: 1,
      description: "Pick one project to finish this week—like wrapping up a task you've been putting off."
    },
    {
      number: 2,
      description: "Before jumping into a debate, take a deep breath and ask, \"What's the other person's perspective?\"—it'll help you connect better."
    },
    {
      number: 3,
      description: "Look for jobs that let you innovate, like being an entrepreneur or a creative director—your kind of vibe!"
    }
  ];

  const stepsToDisplay = actionSteps && actionSteps.length > 0 ? actionSteps : defaultActionSteps;

  return (
    <View style={styles.actionPlanContainer}>
      <Text style={styles.actionPlanTitle}>YOUR ACTION PLAN</Text>
      
      {stepsToDisplay.map((step, index) => (
        <View key={`action-${index}`} style={styles.actionItem}>
          <Text style={styles.actionItemText}>
            {formatWithUsername(step.description, firstname)}
          </Text>
        </View>
      ))}
    </View>
  );
};

// Styles for the component
const createActionPlanStyles = (isDarkMode: boolean) => {
  const theme = getThemeColors(isDarkMode);
  
  return StyleSheet.create({
    actionPlanContainer: {
      backgroundColor: theme.primary,
      padding: 20,
      borderRadius: 6,
      flexGrow: 1,
    },
    actionPlanTitle: {
      fontSize: 20,
      color: "white",
      fontFamily: "PTSans-Bold",
      textAlign: "center",
      marginBottom: 15,
    },
    actionItem: {
      marginBottom: 10,
    },
    actionItemText: {
      fontSize: 12,
      color: "white",
      lineHeight: 1.4,
    },
  });
};

export default PDFActionPlanSection; 