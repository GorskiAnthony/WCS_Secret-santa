import { UserX } from "lucide-react";
import { Participant } from "../utils/secretSanta";

interface ParticipantListProps {
	participants: Participant[];
	onRemoveParticipant: (email: string) => void;
}

export function ParticipantList({
	participants,
	onRemoveParticipant,
}: ParticipantListProps) {
	return (
		<div className="w-full">
			<h2 className="text-xl font-semibold text-gray-900 mb-4">
				Participants ({participants.length})
			</h2>
			<div className="grid grid-cols-3 gap-4">
				{participants.map((participant) => (
					<div
						key={participant.lastname}
						className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
					>
						<div>
							<p className="font-medium text-gray-900">
								{participant.firstname}
							</p>
							<p className="text-sm text-gray-500">
								{participant.lastname}
							</p>
						</div>
						<button
							onClick={() =>
								onRemoveParticipant(participant.lastname)
							}
							className="p-2 text-gray-400 hover:text-red-500 transition-colors"
							aria-label={`Remove ${participant.firstname}`}
						>
							<UserX className="w-5 h-5" />
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
