import React from 'react';
import { UserX } from 'lucide-react';
import { Participant } from '../utils/secretSanta';

interface ParticipantListProps {
  participants: Participant[];
  onRemoveParticipant: (email: string) => void;
}

export function ParticipantList({ participants, onRemoveParticipant }: ParticipantListProps) {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Participants ({participants.length})</h2>
      <div className="space-y-2">
        {participants.map((participant) => (
          <div
            key={participant.email}
            className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
          >
            <div>
              <p className="font-medium text-gray-900">{participant.name}</p>
              <p className="text-sm text-gray-500">{participant.email}</p>
            </div>
            <button
              onClick={() => onRemoveParticipant(participant.email)}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              aria-label={`Remove ${participant.name}`}
            >
              <UserX className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}