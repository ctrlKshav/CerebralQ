import { TestQuestion } from "@/data/mbti";

export function calculateMBTI(
	answers: Record<string, string | number>,
	questions: TestQuestion[]
): string {
	// Define the MBTI dimensions map
	const dimensions: Record<string, { left: number; right: number; leftLetter: string; rightLetter: string }> = {
		"E-I": { left: 0, right: 0, leftLetter: "E", rightLetter: "I" },
		"S-N": { left: 0, right: 0, leftLetter: "S", rightLetter: "N" },
		"T-F": { left: 0, right: 0, leftLetter: "T", rightLetter: "F" },
		"J-P": { left: 0, right: 0, leftLetter: "J", rightLetter: "P" },
	};

	questions.forEach(question => {
		const answer = answers[question.id];
		if (answer === undefined) return;

		const dimension = question.dimension;
		// For binary questions, assume answer is one of the letters
		if (question.type === "binary" && typeof answer === "string") {
			if (answer === dimensions[dimension].leftLetter) dimensions[dimension].left++;
			else if (answer === dimensions[dimension].rightLetter) dimensions[dimension].right++;
		}

		// For likert questions, use a simple heuristic: answers above 3 favor the right side,
		// below 3 favor the left side and 3 is neutral.
		if (question.type === "likert" && typeof answer === "number") {
			if (answer > 3) dimensions[dimension].right += (answer - 3);
			else if (answer < 3) dimensions[dimension].left += (3 - answer);
		}
	});

	// Build personality type by choosing the side with greater score.
	const result = Object.values(dimensions)
		.map(d => (d.left >= d.right ? d.leftLetter : d.rightLetter))
		.join("");
	return result;
}
