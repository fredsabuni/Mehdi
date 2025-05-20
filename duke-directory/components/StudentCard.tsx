  type Student = {
    name: string
    year: string
    major: string
    country: string
    pc: string
  }
  
  export default function StudentCard({ student }: { student: Student }) {
    return (
      <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 w-full max-w-md mx-auto">
        <h2 className="text-xl font-semibold">{student.name}</h2>
        <p className="text-gray-600">Year: {student.year}</p>
        <p className="text-gray-600">Major: {student.major}</p>
        <p className="text-gray-600">Country: {student.country}</p>
        <p className="text-gray-600">Pledge Class: {student.pc}</p>
      </div>
    )
  }
  