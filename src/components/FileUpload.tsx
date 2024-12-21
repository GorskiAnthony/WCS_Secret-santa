import React, { useCallback } from "react";
import { Upload } from "lucide-react";
import { Participant } from "../utils/secretSanta";

interface FileUploadProps {
	onParticipantsLoaded: (participants: Participant[]) => void;
}

export function FileUpload({ onParticipantsLoaded }: FileUploadProps) {
	const handleFileUpload = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target.files?.[0];
			if (!file) return;

			const reader = new FileReader();
			reader.onload = (e) => {
				const text = e.target?.result as string;
				const lines = text.split("\n");
				const participants: Participant[] = lines
					.slice(1) // Skip header row
					.filter((line) => line.trim())
					.map((line) => {
						const [firstname, lastname] = line
							.split(",")
							.map((item) => item.trim());
						return { firstname, lastname };
					});
				onParticipantsLoaded(participants);
			};
			reader.readAsText(file);
		},
		[onParticipantsLoaded]
	);

	return (
		<div className="w-full">
			<label
				htmlFor="file-upload"
				className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
			>
				<div className="flex flex-col items-center justify-center pt-5 pb-6">
					<Upload className="w-12 h-12 mb-4 text-gray-500" />
					<p className="mb-2 text-sm text-gray-500">
						<span className="font-semibold">Click to upload</span>{" "}
					</p>
					<p className="text-xs text-gray-500">
						CSV file with firstname and lastname columns
					</p>
				</div>
				<input
					id="file-upload"
					type="file"
					accept=".csv"
					className="hidden"
					onChange={handleFileUpload}
				/>
			</label>
		</div>
	);
}
