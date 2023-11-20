import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [error, setError] = useState(null);
  const [eleves, setEleves] = useState([]);


  const handleDelete = (deleteID) => {
    axios
      .delete("http://localhost:1337/api/eleves")
      .then(({ data }) => setEleves(data.data))
      .catch(err => console.log(err))
};


  useEffect(() => {
    axios
      .get("http://localhost:1337/api/eleves")
      .then(({ data }) => setEleves(data.data))
      .catch((error) => setError(error));
  }, []);


  if (error) {
    return <div>An error occured: {error.message}</div>;
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

              <tbody className="" style={{}}>

                  {eleves.map(({ id, attributes }) => (
                    <tr key={id} className="">

                      <td className="">{attributes.nom}</td>
                      <td>{attributes.prenom}</td>
                      <td className="">{attributes.telephone}</td>




                      <td className="px-10">
                        <button className="bg-black p-2 rounded-full text-red-500">Editer</button>


                        <button className="" onClick={() => handleDelete(attributes.prenom)}>
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