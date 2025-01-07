import { GitBranch } from 'lucide-react';
import { Course } from '../types/course';

interface PrerequisitesProps {
  course: Course;
  courses: Course[];
  onCourseClick: (course: Course) => void; 
}

export function Prerequisites({ course, courses, onCourseClick }: PrerequisitesProps) {
  
  const getPrerequisiteName = (code: string) => {
    const course = courses.find(c => c.code === code);
    return course ? course.name : `Prerrequisito no encontrado (${code})`;
  };

  const handlePrerequisiteClick = (prereqCode: string) => {
    const prerequisiteCourse = courses.find(c => c.code === prereqCode);
    if (prerequisiteCourse) {
      onCourseClick(prerequisiteCourse); 
    }
  };

  return (
    <div>
      <h3 className="font-semibold text-gray-700 flex items-center gap-2">
        <GitBranch size={18} />
        Prerrequisitos
      </h3>
      {course.prerequisites.length > 0 ? (
        <ul className="mt-2 space-y-1">
          {course.prerequisites.map((prereq) => (
            <li 
              key={prereq} 
              className="text-gray-600 text-sm cursor-pointer underline text-blue-500 hover:text-blue-700"
              onClick={() => handlePrerequisiteClick(prereq)}
            >
              • {getPrerequisiteName(prereq)}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500 mt-1">No tiene prerrequisitos</p>
      )}
    </div>
  );
}
