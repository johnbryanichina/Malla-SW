import React from 'react';
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
    <div className="overflow-x-auto">
      <div className="min-w-[1400px] p-6">
        <div className="grid grid-cols-9 gap-4">
          {/* Header */}
          {semesters.map(semester => (
            <div key={semester} className="text-center font-semibold text-gray-700 pb-4">
              Semestre {semester}
            </div>
          ))}
          
          {/* Courses */}
          {semesters.map(semester => (
            <div key={semester} className="space-y-3">
              {courses
                .filter(course => course.semester === semester)
                .sort((a, b) => a.code.localeCompare(b.code))
                .map(course => (
                  <CourseCard
                    key={course.code}
                    course={course}
                    onClick={onCourseClick}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}