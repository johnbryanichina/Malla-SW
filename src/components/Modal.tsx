import { X, FileText } from 'lucide-react';
import { Course, courseTypeColors } from '../types/course';
import { CourseInfo } from './CourseInfo';
import { Prerequisites } from './Prerequisites';
import { getSyllabusUrl } from '../utils/syllabus';

interface ModalProps {
  course: Course | null;
  onClose: () => void;
  courses: Course[];
  onCourseClick: (course: Course) => void; 
}

export function Modal({ course, onClose, courses, onCourseClick }: ModalProps) {
  if (!course) return null;

  const colors = courseTypeColors[course.type];
  const syllabusUrl = getSyllabusUrl(course.syllabus);

  // Función para manejar el clic en el fondo (fuera del modal)
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackgroundClick} 
    >
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className={`inline-block px-3 py-1 rounded-full text-sm ${colors.bg} ${colors.text} mb-2`}>
          {course.type.charAt(0).toUpperCase() + course.type.slice(1)}
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{course.name}</h2>
        
        <CourseInfo course={course} />
        
        <div className="space-y-4">
          <Prerequisites course={course} courses={courses} onCourseClick={onCourseClick} /> 

          <div>
            <h3 className="font-semibold text-gray-700">Información Adicional</h3>
            <div className="mt-2 text-sm text-gray-600">
              <p>Nivel: {course.level}</p>
              <p>Semestre: {course.semester}</p>
              <p>Código: {course.code}</p>
            </div>
          </div>

          <a
            href={syllabusUrl}
            onClick={
              (e) => {
                if (!syllabusUrl) {
                  e.preventDefault();  
                }
              }
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mt-4"
          >
            <FileText className="w-4 h-4 mr-2" />
            Ver Sílabo
          </a>
        </div>
      </div>
    </div>
  );
}
