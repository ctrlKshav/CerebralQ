import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { formatWithUsername } from "@/lib/formatWithUsername";
import PDFListItem from "./PDFListItem";
import { createTwoColumnLayoutStyles } from "../PDFTheme";
import { CheckboxIcon, UpArrowIcon } from "./icons";
import { ICON_COLORS } from "@/lib/constants";


interface TwoColumnItem {
  description: string;
}

interface PDFTwoColumnSectionProps {
  leftTitle: string;
  leftIcon: React.ReactNode;
  leftItems: TwoColumnItem[];
  rightTitle: string;
  rightIcon: React.ReactNode;
  rightItems: TwoColumnItem[];
  firstname: string | null;
  isDarkMode?: boolean;
}

const PDFTwoColumnSection: React.FC<PDFTwoColumnSectionProps> = ({
  leftTitle,
  leftIcon,
  leftItems,
  rightTitle,
  rightIcon,
  rightItems,
  firstname,
  isDarkMode = false,
}) => {
  const styles = createTwoColumnLayoutStyles(isDarkMode);

  return (
    <View style={styles.columnsContainer}>
      <View style={styles.column}>
        <View style={styles.columnTitleContainer}>
          {leftIcon}
          <Text style={[styles.columnTitle, { marginLeft: 8 }]}>
            {leftTitle}
          </Text>
        </View>
        <View style={styles.listSection}>
          {leftItems.map((item, index) => (
            <PDFListItem
              key={`left-${index}`}
              text={formatWithUsername(item.description, firstname)}
              icon={<CheckboxIcon   color={ICON_COLORS.award} size={14} />}
              isDarkMode={isDarkMode}
            />
          ))}
        </View>
      </View>

      <View style={styles.column}>
        <View style={styles.columnTitleContainer}>
          {rightIcon}
          <Text style={[styles.columnTitle, { marginLeft: 8 }]}>
            {rightTitle}
          </Text>
        </View>
        <View style={styles.listSection}>
          {rightItems.map((item, index) => (
            <PDFListItem
              key={`right-${index}`}
              text={formatWithUsername(item.description, firstname)}
              icon={<UpArrowIcon color={ICON_COLORS.upArrow} size={14} />}
              isDarkMode={isDarkMode}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default PDFTwoColumnSection;
