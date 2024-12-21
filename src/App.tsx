import { useState } from "react";
import { GiftIcon } from "lucide-react";
import { FileUpload } from "./components/FileUpload";
import { AssignmentList } from "./components/AssignmentList";
import { ParticipantList } from "./components/ParticipantList";
import {
	Participant,
	Assignment,
	assignSecretSanta,
} from "./utils/secretSanta";

function App() {
	const [participants, setParticipants] = useState<Participant[]>([]);
	const [assignments, setAssignments] = useState<Assignment[]>([]);

	const handleParticipantsLoaded = (newParticipants: Participant[]) => {
		setParticipants(newParticipants);
		const newAssignments = assignSecretSanta(newParticipants);
		setAssignments(newAssignments);
	};

	const handleRemoveParticipant = (lastname: string) => {
		const updatedParticipants = participants.filter(
			(p) => p.lastname !== lastname
		);
		setParticipants(updatedParticipants);

		if (updatedParticipants.length >= 2) {
			const newAssignments = assignSecretSanta(updatedParticipants);
			setAssignments(newAssignments);
		} else {
			setAssignments([]);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100">
			<div className="container mx-auto px-4 py-8">
				<div className="max-w-3xl mx-auto">
					{/* Header */}
					<div className="text-center mb-12">
						<div className="flex justify-center mb-4">
							<GiftIcon className="w-16 h-16 text-red-500" />
						</div>
						<h1 className="text-4xl font-bold text-gray-900 mb-4">
							Secret Santa Generator
						</h1>
						<p className="text-lg text-gray-600">
							Upload a CSV file with your participants' firstname
							and lastname to generate Secret Santa assignments
						</p>
					</div>

					{/* Main Content */}
					<div className="space-y-8">
						<FileUpload
							onParticipantsLoaded={handleParticipantsLoaded}
						/>

						{participants.length > 0 && (
							<ParticipantList
								participants={participants}
								onRemoveParticipant={handleRemoveParticipant}
							/>
						)}

						{assignments.length > 0 && (
							<AssignmentList assignments={assignments} />
						)}

						{/* Instructions */}
						<div className="bg-white p-6 rounded-lg shadow-md mt-8">
							<h2 className="text-xl font-semibold text-gray-900 mb-4">
								How to Use
							</h2>
							<ol className="list-decimal list-inside space-y-2 text-gray-700">
								<li>
									Prepare a CSV file with two columns:
									firstname and lastname
								</li>
								<li>
									Upload your CSV file using the upload area
									above
								</li>
								<li>Remove any participants if needed</li>
								<li>
									The system will automatically generate
									random assignments
								</li>
								<li>
									Each person will be assigned someone to give
									a gift to
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
