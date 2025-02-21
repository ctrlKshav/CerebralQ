import type { TestQuestion } from "@/types/tests/mbti";

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
		 // Process only likert questions
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
