import "../App.css"

function AddUser() {

const newStudentTemplate = {
  name: "",
  birthPlace: "",
  birthDate: "",
  motherName: "",
  address: "",
  enrollmentDate: "",
  major: "",
  classGroup: "",
  isDorm: false,
  dormName: ""
};

  return (
    <>
      <h2>Új tanuló felvétele</h2>

      <input type="text" placeholder="Név" />
      <input type="text" placeholder="Születési hely" />
      <input type="date" placeholder="Születési idő" />
      <input type="text" placeholder="Anyja neve" />
      <input type="text" placeholder="Lakcím" />
      <input type="date" placeholder="Beiratkozás dátuma" />
      <input type="text" placeholder="Szak" />
      <input type="text" placeholder="Osztály" />

      <label>
        <input type="checkbox" /> Kollégista?
      </label>

      {/* Optional: only shows the dorm name field — just always visible for now */}
      <input type="text" placeholder="Kollégium neve"/>
      <button>send</button>
    </>
  )
}

export default AddUser