import OceanTest from "@/components/start-test/ocean";
import { ipipneo120 } from "@/data/tests/ocean/questions/ipip120";
import React from "react";

export default function TakeTestpage() {
  return (
    <div>
      <OceanTest oceanTestQuestionsData={ipipneo120} />
    </div>
  );
}
