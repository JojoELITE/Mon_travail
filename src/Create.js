import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {

    const [error, setError] = useState(null);
    const [inputData, setInputData] = useState({
        "nom": "",
        "prenom": "",
        "telephone": "",
        "email": ""
    })

    const navigat = useNavigate();



    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputData)

        try {
           const response = await Axios.post('http://localhost:1337/api/eleves', {inputData});
           console.log('Response de l\'API Strapi :', response.inputData);
        } 
        catch(error) {
            if (error.response) {
                console.log('reponse du serveur avec erreur:', error.response.inputData);
            }
            else if (error.request) {
                console.log('la requete n\'a plus pu etre affectué:', error.request);
            }
            else {
                console.log('Erreur lors de la requete:', error.message);
            }
        }
    }


    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputData({...inputData, [name]: value});
    };


    return (
        <div>
            <form  onSubmit={handleSubmit}>

                <div>

                      <label htmlFor="name"> Nom: </label>
                      <input type="text" name="nom" id="name"  value={inputData.nom}
                      onChange={handleChange}/>

                </div>


                <div>

                      <label htmlFor="firstname"> Prenom: </label>
                      <input type="text" name="prenom" id="firstname"   value={inputData.prenom}              
                      onChange={handleChange}/>


                </div>


                <div>

                      <label htmlFor="phone"> telephone: </label>
                      <input type="text" name="telephone"    id="phone"  value={inputData.telephone}                 
                      onChange={handleChange}/>


                </div>


                <div>

                      <label htmlFor="mail"> Email: </label>
                      <input type="email" name="email" id="mail" value={inputData.email}
                      onChange={handleChange}/>


                </div> <br></br>


                <button type="submit">Ajouter</button>

            </form>
        </div>
    )
}

export default Create;