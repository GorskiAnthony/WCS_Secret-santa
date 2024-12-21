// Utility function to shuffle and assign Secret Santa pairs
export function assignSecretSanta(participants: Participant[]): Assignment[] {
	const shuffled = [...participants].sort(() => Math.random() - 0.5);
	return shuffled.map((giver, index) => ({
		giver: giver,
		receiver: shuffled[(index + 1) % shuffled.length],
	}));
}

export interface Participant {
	firstname: string;
	lastname: string;
}

export interface Assignment {
	giver: Participant;
	receiver: Participant;
}
