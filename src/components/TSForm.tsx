import { useEffect, useState } from "react";

const TSForm = () => {
  let initialState = {
    name: "",
    email: "",
    password: ""
  };
  const [form, setForm] = useState(initialState);
  const [db, setDB] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    db.push(form);
  };

  useEffect(() => {}, [db]);

  return (
    <div>
      <form
        onSubmit={submit}
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <label>
          Nombre
          <input
            onChange={({ target }) => {
              setForm({ ...form, name: target.value });
            }}
          />
        </label>
        <label>
          <input
            onChange={({ target }) => {
              setForm({ ...form, email: target.value });
            }}
          />
        </label>
        <label>
          <input
            onChange={({ target }) => {
              setForm({ ...form, password: target.value });
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <table>
        <thead>
          <td>nombre</td>
          <td>email</td>
          <td>password</td>
        </thead>
        <tbody>
          {db.map((v) => {
            return (
              <tr>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TSForm;
