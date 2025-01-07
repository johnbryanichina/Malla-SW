export interface Course {
  id: string;
  name: string;
  code: string;
  credits: number;
  semester: number;
  level: number;
  prerequisites: string[];
  description: string;
  type: 'basic' | 'professional' | 'integration' | 'english';
  hours: number;
  syllabus:string;
}

export type CourseType = Course['type'];

export const courseTypeColors: Record<CourseType, { bg: string; border: string; text: string }> = {
  basic: { bg: 'bg-blue-100', border: 'border-blue-200', text: 'text-blue-800' },
  professional: { bg: 'bg-yellow-100', border: 'border-yellow-200', text: 'text-yellow-800' },
  integration: { bg: 'bg-green-100', border: 'border-green-200', text: 'text-green-800' },
  english: { bg: 'bg-purple-100', border: 'border-purple-200', text: 'text-purple-800' }
};