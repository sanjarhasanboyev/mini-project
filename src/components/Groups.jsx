import Student from "./Student";
import students from '../data/students.json';

const Groups = () => {
  return (
    <div className="bg-[#232E3C] min-h-screen p-6 text-white">
      <div className="mb-4">
        <div className="flex gap-4 border-b border-slate-700 pb-2">
          {["Talabalar", "Davomat", "Darslar", "Imtixonlar"].map((tab) => (
            <button
              key={tab}
              className="text-white font-medium border-b-2 border-transparent hover:border-white transition"
            >
              {tab}
            </button>
          ))}
          <button className="ml-auto bg-[#1B2532] px-4 py-1 rounded flex items-center gap-2 hover:bg-slate-700">
            Talaba qo’shish <span className="text-xl font-bold">+</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-[#DEDEDE] uppercase bg-[#1B2532]">
            <tr>
              {[
                "#",
                "Ism Familiya",
                "Sinf",
                "Telefon raqam",
                "Yo’nalish",
                "Kurslar",
                "Balans",
                "Status",
                "Qo’shimcha",
              ].map((col) => (
                <th key={col} className="px-4 py-3">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students
              .map(student => (
                <tr key={student.id}
                  className="border-b border-slate-800 hover:bg-[#2E3947] text-[#DEDEDE] transition"
                >
                  <Student student={student}/>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end items-center gap-2 mt-4">
        <button className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600">
          Oldingi
        </button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded ${
              page === 1
                ? "bg-emerald-500 text-white"
                : "bg-slate-700 text-white hover:bg-slate-600"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600">
          Keyingi
        </button>
      </div>
    </div>
  );
};

export default Groups;
