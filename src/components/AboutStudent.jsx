
const AboutStudent = ({ student }) => {
  return (
    <div className="min-h-screen bg-[#1a2634] p-6 flex justify-center items-center">
      <div className="bg-[#2a3b4c] rounded-lg shadow-lg p-8 w-full max-w-2xl text-white">
        {/* Profil sarlavhasi va rasm */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src={student.image}
            alt={student.name}
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <div>
            <h1 className="text-3xl font-bold">{student.name}</h1>
            <p className="text-gray-400">{student.email}</p>
          </div>
        </div>

        {/* Asosiy ma'lumotlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sol tarafdagi ma'lumotlar */}
          <div className="space-y-4">
            <div>
              <span className="text-gray-400">Telefon raqam:</span>
              <p className="text-lg">{student.phone}</p>
            </div>
            <div>
              <span className="text-gray-400">Yo'nalish:</span>
              <p className="text-lg">{student.direction}</p>
            </div>
            <div>
              <span className="text-gray-400">Guruh:</span>
              <p className="text-lg">
                {student.groupName} ({student.groupSize})
              </p>
            </div>
            <div>
              <span className="text-gray-400">Kurslar:</span>
              <p className="text-lg">{student.courses.join(", ")}</p>
            </div>
          </div>

          {/* O'ng tarafdagi ma'lumotlar */}
          <div className="space-y-4">
            <div>
              <span className="text-gray-400">Yosh:</span>
              <p className="text-lg">{student.age}</p>
            </div>
            <div>
              <span className="text-gray-400">Ro'yxatdan o'tgan sana:</span>
              <p className="text-lg">{student.registrationDate}</p>
            </div>
            <div>
              <span className="text-gray-400">Balans:</span>
              <p className="text-lg">{student.balance} so'm</p>
            </div>
            <div>
              <span className="text-gray-400">O'zlashtirish:</span>
              <p className="text-lg">{student.progress}%</p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mt-6">
          <span className="text-gray-400">Status:</span>
          <span
            className={`ml-2 px-3 py-1 rounded ${
              student.status === "Aktiv"
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {student.status}
          </span>
        </div>

        {/* Orqaga qaytish tugmasi */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Orqaga qaytish
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutStudent;
