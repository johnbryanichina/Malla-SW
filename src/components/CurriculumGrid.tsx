import { Course } from '../types/course';
import { CourseCard } from './CourseCard';

interface CurriculumGridProps {
  courses: Course[];
  onCourseClick: (course: Course) => void;
}

export function CurriculumGrid({ courses, onCourseClick }: CurriculumGridProps) {
  // Group courses by semester
  const semesters = Array.from({ length: 9 }, (_, i) => i + 1);
  
  return (
    <div className="overflow-x-hidden p-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-6">
        {semesters.map((semester) => (
          <div key={semester} className="space-y-3">
             
            <div className="text-center font-semibold text-gray-700">
              Semestre {semester}
            </div>
            
            <div className="space-y-2">
              {courses
                .filter((course) => course.semester === semester)
                .sort((a, b) => a.code.localeCompare(b.code))
                .map((course) => (
                  <CourseCard
                    key={course.code}
                    course={course}
                    onClick={onCourseClick}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}