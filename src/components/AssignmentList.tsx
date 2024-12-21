import { Gift } from "lucide-react";
import { Assignment } from "../utils/secretSanta";

interface AssignmentListProps {
	assignments: Assignment[];
}

export function AssignmentList({ assignments }: AssignmentListProps) {
	return (
		<div className="w-full space-y-4">
			<h2 className="text-xl font-semibold text-gray-900 mb-4">
				Secret Santa Assignments
			</h2>
			<div className="grid grid-cols-2 gap-4">
				{assignments.map((assignment, index) => (
					<div
						key={index}
						className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
					>
						<Gift className="w-6 h-6 text-red-500 flex-shrink-0" />
						<div className="flex-1">
							<p className="font-medium text-gray-900">
								{assignment.giver.firstname}
								<span className="text-sm text-gray-500">
									{" "}
									{assignment.giver.lastname}
								</span>
							</p>
							<p className="text-sm text-gray-500">gives to</p>
							<p className="font-medium text-gray-900">
								{assignment.receiver.firstname}
								<span className="text-sm text-gray-500">
									{" "}
									{assignment.receiver.lastname}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
