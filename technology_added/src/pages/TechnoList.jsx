function TechnoListe({ techs = [] }) {
     return (
       <div className="container mt-5">
         <h1 className="text-center mb-4 text-success">
           <i className="bi bi-award-fill me-2 fs-3"></i>Certificats de Technologies
         </h1>
   
         {techs.length === 0 ? (
           <p className="text-center text-muted">
             <i className="bi bi-info-circle"></i> Aucune technologie ajoutée pour le moment.
           </p>
         ) : (
           <div className="row justify-content-center">
             {techs.map((tech, index) => (
               <div key={index} className="col-lg-11 col-md-10 mb-5">
                 <div className=" rounded-4 bg-light p-4 shadow-lg" style={{ borderTop: '4px solid #28a745' }}>
                   <h3 className="text-center text-success border-bottom pb-2 mb-3">
                     <i className="bi bi-patch-check-fill me-2 fs-3"></i>
                     CERTIFICAT DE COMPÉTENCE
                   </h3>
                   <p className="text-center text-muted mb-4">
                     Ce certificat atteste que l'utilisateur maîtrise la technologie suivante :
                   </p>
   
                   <div className="ps-3">
                     <p>
                       <i className="bi bi-laptop me-2 fs-4"></i>
                       <strong>Technologie :</strong> {tech.nom}
                     </p>
                     <p>
                       <i className="bi bi-diagram-3 me-2 fs-4"></i>
                       <strong>Catégorie :</strong> {tech.categorie}
                     </p>
                     <p>
                       <i className="bi bi-bar-chart-line me-2 fs-4"></i>
                       <strong>Niveau de maîtrise :</strong> {tech.niveau}
                     </p>
                     <p>
                       <i className="bi bi-card-text me-2 fs-4"></i>
                       <strong>Description :</strong> {tech.description}
                     </p>
                     {tech.duree && (
                       <p>
                         <i className="bi bi-hourglass-split me-2 fs-4"></i>
                         <strong>Durée d’apprentissage :</strong> {tech.duree}
                       </p>
                     )}
                   </div>
   
                   <div className="text-end mt-4 pe-3">
                     <em className="text-muted">
                       <i className="bi bi-pen"></i> Signé : Votre application
                     </em>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         )}
       </div>
     );
   }
   
   export default TechnoListe;
   