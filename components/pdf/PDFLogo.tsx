import React from "react";
import { View, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 92,
    height: 54,
    zIndex: 999,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
});

interface PDFLogoProps {
  logoUrl?: string;
}

export const PDFLogo: React.FC<PDFLogoProps> = ({
  logoUrl = "/images/cq-logo.png", // Default logo path - update this to match your actual logo path
}) => {
  return (
    <View style={styles.logoContainer}>
      <Image src={logoUrl} style={styles.logo} />
    </View>
  );
}; 