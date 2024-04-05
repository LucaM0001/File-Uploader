import { useState } from "react";
import axios from "axios";

const App = (props) => {
  const [file, setFile] = useState();

  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:3001/upload", formData)
      .then((res) => {})
      .catch((er) => console.log(er));
  };
  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.currentTarget.files[0])} />
      <button onClick={upload}>Upload</button>
    </div>
  );
};

export default App;
