function Student({ student }) {
  return (
    <>
      <td className="px-4 py-3">{student.id}</td>
      <td className="px-4 py-3">{student.name}</td>
      <td className="px-4 py-3">{student.groupSize}</td>
      <td className="px-4 py-3">{student.phone}</td>
      <td className="px-4 py-3">{student.direction}</td>
      <td className="px-4 py-3">
        {student.courses.map((course) => (
          <p key={course}>{course}</p>
        ))}
      </td>
      <td className="px-4 py-3">{student.balance}</td>
      <td className="px-4 py-3">
        <span
          className={
            student.status === "Aktiv" ? "text-[#38C49A]" : "text-[#F47797]"
          }
        >
          {student.status === "Aktiv" ? "Aktiv" : "Arxiv"}
        </span>
      </td>
      <td className="px-4 py-3">
        <a href={`profile/${student.id}`} className="text-sky-400 hover:underline">
          Profilga o’tish
        </a>
      </td>
    </>
  );
}

export default Student;
