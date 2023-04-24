import React, { useState, useEffect } from "react";
import { getAllPeople, getRandom } from "../api/user";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { loadTeam } from "../slices/teamSlice";
import Card from "../components/card";
import { motion } from "framer-motion";

const Home = (props) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [random, setRandom] = useState(null);

  //fonction pour charger un random collaborateur
  const getRandomPerso = () => {
    //j'appel ma fonction api en lui envoyant le token pour le header
    getRandom()
      .then((res) => {
        console.log(res.data);
        setRandom(res.data);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const dispatchTeam = () => {
    getAllPeople().then((res) => {
      dispatch(loadTeam(res.data));
    });
  };

  useEffect(() => {
    getRandomPerso();
    dispatchTeam();
  }, []);

  const styleHome = {
    width: "80%",
    height: "10%",
    margin: "0",
  };

  return (
    <>
      <section className="container">
        <div className="div-container">
          <div className="home-top-container">
            <h1>
              B<span id="span">ie</span>nv
              <span className="color" id="span">
                en
              </span>
              ue s<span id="span">ur</span>
              <span style={{ color: "#0bb865" }}> Team Up</span>
            </h1>
            <p>
              La plateforme de l'entreprise qui vous connecte à vos
              collaborateurs.
            </p>
          </div>
          <div className="home-right-container">
            <button
              id="bonjour"
              onClick={() => {
                getRandomPerso();
              }}
            >
              DIRE BONJOUR À QUELQU'UN D'AUTRE
            </button>
            {random !== null && <Card style={styleHome} infos={random} />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

//
