import { useState } from 'react';

function Form(props) {
  const { handleAddTechno } = props;

  const [technos, setTechnos] = useState({
    nom: '',
    categorie: '',
    description: '',
    niveau: '',
    duree: ''  // Champ pour la durée
  });

  function handleSubmit(e) {
    e.preventDefault();
    handleAddTechno(technos);  // Passe les données à l'extérieur
    setTechnos({
      nom: '',
      categorie: '',
      description: '',
      niveau: '',
      duree: ''  // Réinitialiser le champ duree après soumission
    });
  }

  return (
    <div className="container mt-5 p-4 bg-light rounded shadow">
      <h3 className="mb-4 text-center text-primary">Ajouter une Technologie</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom de la technologie</label>
          <input
            type="text"
            className="form-control"
            id="nom"
            placeholder="Ex : React, Node.js..."
            value={technos.nom}
            onChange={(e) => setTechnos({ ...technos, nom: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="categorie" className="form-label">Catégorie</label>
          <select
            className="form-select"
            id="categorie"
            value={technos.categorie}
            onChange={(e) => setTechnos({ ...technos, categorie: e.target.value })}
          >
            <option value="" disabled>Choisir une catégorie</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Petite description de la techno"
            value={technos.description}
            onChange={(e) => setTechnos({ ...technos, description: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="niveau" className="form-label">Niveau de maîtrise</label>
          <select
            className="form-select"
            id="niveau"
            value={technos.niveau}
            onChange={(e) => setTechnos({ ...technos, niveau: e.target.value })}
          >
            <option value="" disabled>Choisir un niveau</option>
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Confirmé">Confirmé</option>
            <option value="Avancé">Avancé</option>
            <option value="Expert">Expert</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="duree" className="form-label">Durée d’apprentissage</label>
          <input
            type="text"
            className="form-control"
            id="duree"
            placeholder="Ex : 3 mois, 6 mois..."
            value={technos.duree}
            onChange={(e) => setTechnos({ ...technos, duree: e.target.value })}
          />
        </div>

        <div className="text-center">
          <button className="btn btn-success px-5">Ajouter</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
