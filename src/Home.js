import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [error, setError] = useState(null);
  const [eleves, setEleves] = useState([]);
  const [edit, setEdit] = useState(-1); 



  useEffect(() => {
    axios
      .get("http://localhost:1337/api/eleves")
      .then(({ data }) => setEleves(data.data))
      .catch((error) => setError(error));
  }, []);


  if (error) {
    return <div>An error occured: {error.message}</div>;
  }


  const handleEdit = (id) => {
    setEdit(id)
  }
  

  return (
    <div className="contener mt-5">

                <Link to='/create'>
                    Create +
                </Link>


            <table className="mt-10 ml-10"> 
              <thead className=""> 
                <tr className="">
                  <th className="">Nom</th>
                  <th>Prenom</th>
                  <th className="">Telephone</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className="" style={{ }}>

                  {eleves.map(({ id, attributes }) => (
                    id.id === edit?
                    <tr>
                        <td> {id.id} </td>
                        <td><input type="text" value={id.nom}/></td>
                        <td><input type="text" value={id.prenom}/></td>
                        <td><input type="text" value={id.telephone}/></td>
                        <td><button>Update</button></td>
                    <tr/>
                    :

                    <tr key={id} className="">

                      <td className="">{attributes.nom}</td>
                      <td>{attributes.prenom}</td>
                      <td className="">{attributes.telephone}</td>

                      <td className="px-10">
                        <button className="bg-black p-2 rounded-full text-red-500">Editer</button>


                        <button className="" onClick={() => (attributes.prenom)}>
                            Supprimer
                        </button>                     
                        
                      </td>
                      

                    </tr>
                  ))}

              </tbody>


            </table>


    </div>
  );
};

export default App;