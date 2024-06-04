import React from 'react';
import { CONDITIONGENDER, CONDITIONGRADE, CONDITIONLOCATION } from '../constants';

interface MatchConditionsProps {
  gender: number | null;
  setGender: (gender: number) => void;
  location: number | null;
  setLocation: (location: number) => void;
  grade: number | null;
  setGrade: (grade: number) => void;
  handleMatch: () => void;
}

const MatchConditions: React.FC<MatchConditionsProps> = ({
  gender,
  setGender,
  location,
  setLocation,
  grade,
  setGrade,
  handleMatch
}) => {
  return (
    <>
      <div className="mb-5 mt-6">
        <label className="block text-sm font-semibold text-gray-600 tracking-wide">성별</label>
        <div className="flex space-x-2">
          {CONDITIONGENDER.map((conditionGender, idx) => (
            <button
              type="button"
              key={conditionGender}
              onClick={() => setGender(idx)}
              className={`flex-1 p-2 border rounded ${gender === idx? 'bg-gray-200' : ''}`}
            >
              {conditionGender}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">장소</label>
        <div className="flex space-x-2">
          {CONDITIONLOCATION.map((conditionLocation, idx) => (
            <button
            className={`flex-1 p-2 border rounded ${location === idx? 'bg-gray-200' : ''}`}
            onClick={() => setLocation(idx)}
            >
            {conditionLocation}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">학년</label>
        <div className="flex space-x-2">
          {CONDITIONGRADE.map((conditionGrade, idx) => (
            <button
            className={`flex-1 p-2 border rounded ${grade === idx? 'bg-gray-200' : ''}`}
            onClick={() => setGrade(idx)}
            >
              {conditionGrade}
            </button>
          ))}
        </div>
      </div>
      <button
        className="w-full bg-orange-400 text-white py-2 rounded"
        onClick={handleMatch}
      >
        매칭하기
      </button>
    </>
  );
};

export default MatchConditions;
