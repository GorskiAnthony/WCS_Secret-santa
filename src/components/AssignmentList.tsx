import React from 'react';
import { Gift } from 'lucide-react';
import { Assignment } from '../utils/secretSanta';

interface AssignmentListProps {
  assignments: Assignment[];
}

export function AssignmentList({ assignments }: AssignmentListProps) {
  return (
    <div className="w-full max-w-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Secret Santa Assignments</h2>
      {assignments.map((assignment, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
        >
          <Gift className="w-6 h-6 text-red-500 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-medium text-gray-900">{assignment.giver.name}</p>
            <p className="text-sm text-gray-500">gives to</p>
            <p className="font-medium text-gray-900">{assignment.receiver.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}