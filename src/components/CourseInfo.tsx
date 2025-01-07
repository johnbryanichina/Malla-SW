import { Clock, BookOpen } from 'lucide-react';
import { Course } from '../types/course';

interface CourseInfoProps {
  course: Course;
}

export function CourseInfo({ course }: CourseInfoProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="flex items-center space-x-2">
        <Clock className="text-gray-400" size={20} />
        <div>
          <p className="text-sm font-medium text-gray-600">Horas Totales</p>
          <p className="text-lg font-semibold">{course.hours}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <BookOpen className="text-gray-400" size={20} />
        <div>
          <p className="text-sm font-medium text-gray-600">Créditos</p>
          <p className="text-lg font-semibold">{course.credits}</p>
        </div>
      </div>
    </div>
  );
}