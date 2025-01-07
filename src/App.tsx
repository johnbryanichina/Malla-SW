import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { CurriculumGrid } from './components/CurriculumGrid';
import { Modal } from './components/Modal';
import { courses } from './data/courses';
import { courseTypeColors } from './types/course';
import { Course } from './types/course'; // Importar tipo Course

function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course); // Establecer el curso seleccionado para abrir el modal
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Malla Curricular - Ingeniería de Software
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <CurriculumGrid
            courses={courses}
            onCourseClick={handleCourseClick} // Pasa la función para abrir el modal
          />
        </div>

        <div className="mt-6 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3">Leyenda</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(courseTypeColors).map(([type, colors]) => (
              <div key={type} className="flex items-center space-x-2">
                <div className={`w-4 h-4 ${colors.bg} ${colors.border} rounded`}></div>
                <span className="text-sm capitalize">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Modal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        courses={courses}
        onCourseClick={handleCourseClick} // Pasamos handleCourseClick a Modal
      />
    </div>
  );
}

export default App;
