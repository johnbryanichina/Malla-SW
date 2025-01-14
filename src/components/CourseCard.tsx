import { Course, courseTypeColors } from '../types/course';
import { Clock } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onClick: (course: Course) => void;
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  const colors = courseTypeColors[course.type];
  
  return (
    <button title={course.name}
      onClick={() => onClick(course)}
      className={`w-full h-48 p-3 ${colors.bg} ${colors.border} border-2 rounded-lg 
        hover:shadow-md transition-all duration-200 text-left group`}
    >
       <div className="flex items-center text-xs text-gray-500">
          <Clock className="w-3 h-3 mr-1" />
          {course.hours}h
        </div>
      <div className="flex justify-between items-start mb-1">
        
        <h3 className={` whitespace-normal break-words overflow-visible font-semibold text-sm truncate ${colors.text}`}>
          {course.name}
        </h3>
       
      </div>
      <p className="text-xs text-gray-600">{course.code}</p>
      <div className="text-xs text-gray-500 mt-1">
        {course.credits} créditos
      </div>
    </button>
  );
}