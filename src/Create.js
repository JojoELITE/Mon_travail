import axios from "axios";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState, useId } from "react";


const App = () => {
  const [error, setError] = useState(null);
  const [modifiedData, setModifiedData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    
  });

  const handleInputChange = useCallback(({ 
    target: { name, value } }) => {
    setModifiedData((prevData) => ({ 
    ...prevData, [name]: value }));
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:1337/api/eleves", { data: modifiedData })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  

  return (
    <div className="App">

        <Link to='/'>
            Home
        </Link>


      <form onSubmit={handleSubmit}>
            
        <label>
          Nom:
          <input
            type="text"
            name="nom"
            onChange={handleInputChange}
            value={modifiedData.nom}
          />
        </label>


        <label>
          Prenom:
          <input
            type="text"
            name="prenom"
            onChange={handleInputChange}
            value={modifiedData.prenom}
          />
        </label>

        <label>
          Telephone:
          <input
            type="text"
            name="telephone"
            onChange={handleInputChange}
            value={modifiedData.telephone}
          />
        </label>

        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default App;