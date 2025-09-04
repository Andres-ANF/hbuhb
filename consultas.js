// Datos de las consultas
const Consulta = [
  {  
    estudiante :"Camilo Andres Estrada Vanegas",
    cadenaBusqueda: "Cybersecurity AND cloud", 
    BD: "SPRINGER NATURE Link", 
    articulos: 14778 ,
    articulosSeleccionados: [
      {
        titulo: "Intelligent cybersecurity approach for data protection in cloud computing based Internet of Things",
        autores: "Mughaid, A., Obeidat, I., Abualigah, L., Alzubi, S., Daoud, M. S., & Migdady, H",
        año: 2024,
        palabrasClave: "Cybersecurity,Cryptography,Cloud computing,Architectural model,Intelligent",
        url: "https://doi.org/10.1007/s10207-024-00832-0",
        citaApa:"Mughaid, A., Obeidat, I., Abualigah, L., Alzubi, S., Daoud, M. S., & Migdady, H. (2024). Intelligent cybersecurity approach for data protection in cloud computing based Internet of Things. International Journal of Information Security, 23(6), 2123–2137. https://doi.org/10.1007/s10207-024-00832-0"
      },
      {
        titulo: "RETRACTED ARTICLE: Quantum-enhanced cybersecurity analysis and medical image encryption in cloud IoT networks",
        autores: "Priyadarshini, A., Abirami, S. P., Ahmed, M. A., & otros",
        año: 2024,
        palabrasClave: "Cybersecurity,Medical image encryption,Cloud computing,Internet of Things,Quantum computing",
        url: "https://doi.org/10.1007/s11082-023-06018-7",
        citaApa:"Priyadarshini, A., Abirami, S. P., Ahmed, M. A., & otros. (2024). RETRACTED ARTICLE: Quantum-enhanced cybersecurity analysis and medical image encryption in cloud IoT networks. Optical and Quantum Electronics, 56, 674. https://doi.org/10.1007/s11082-023-06018-7"
      },
      {
        titulo: "Active cybersecurity: Vision, model, and key technologies",
        autores: "Zhang, X., Zhu, Y., Li, X., & otros",
        año: 2025,
        palabrasClave: "Active cybersecurity, Intelligent threat sensing, In-depth behavior analysis, Comprehensive path profiling,Dynamic countermeasures",
        url: "https://doi.org/10.1631/FITEE.2500053",
        citaApa:"Zhang, X., Zhu, Y., Li, X., & otros. (2025). Active cybersecurity: Vision, model, and key technologies. Frontiers of Information Technology & Electronic Engineering. Advance online publication. https://doi.org/10.1631/FITEE.2500053"
      }
    ]
  },

  {  
    estudiante :"Andres Felipe Avendaño Novoa",
    cadenaBusqueda: "Cybersecurity cloud NOT blockchain", 
    BD: "Science Direct", 
    articulos: 6357 ,
    articulosSeleccionados: [
      {
        titulo: "Enhancing Cybersecurity in Cloud Computing and WSNs: A Hybrid IDS Approach",
        autores: "Sundaramoorthy, K., Purushothaman, K., Sonia, J. J",
        año: 2024,
        palabrasClave: "Cloud computing, Intrusion detection,Multi-Layer Perceptron Neural Network, LSTM, OSVM",
        url: "https://doi.org/10.1016/j.cose.2024.104081",
        citaApa:"Sundaramoorthy, K., Purushothaman, K., Sonia, J. J., & Kanthimathi, N. (2024). Enhancing Cybersecurity in Cloud Computing and WSNs: A Hybrid IDS Approach. Computers & Security, 147, 104081. https://doi.org/10.1016/j.cose.2024.104081"
      },
      {
        titulo: "A Cloud-based platform for the emulation of complex cybersecurity scenarios",
        autores: "Furfaro, A., Piccolo, A., Parise, A., Argento, L., & Saccà, D",
        año: 2018,
        palabrasClave: "Cybersecurity,Virtual environments,Cloud-based systems",
        url: "https://doi.org/10.1016/j.future.2018.07.025",
        citaApa:"Furfaro, A., Piccolo, A., Parise, A., Argento, L., & Saccà, D. (2018). A Cloud-based platform for the emulation of complex cybersecurity scenarios. Future Generation Computer Systems, 89, 791-803. https://doi.org/10.1016/j.future.2018.07.025"
      },
      {
        titulo: "A cybersecurity model in cloud computing environments",
        autores: "Rabai, L. B. A., Jouini, M., Aissa, A. B., & Mili, A",
        año: 2012,
        palabrasClave: "Cloud computing,Cyber security,Mean failure cost,Security requirements,Security threats" ,
        url: "https://doi.org/10.1016/j.jksuci.2012.06.002",
        citaApa:"Rabai, L. B. A., Jouini, M., Aissa, A. B., & Mili, A. (2012). A cybersecurity model in cloud computing environments. Journal Of King Saud University - Computer And Information Sciences, 25(1), 63-75. https://doi.org/10.1016/j.jksuci.2012.06.002"
      }
    ]
  },

  {  
    estudiante :"Jhon Hector Perez Robles",
    cadenaBusqueda: "( cybersecurity AND cloud OR cloud AND security ) AND ( threats OR vulnerabilities OR risks )", 
    BD: "Scopus", 
    articulos: 1264 ,
    articulosSeleccionados: [
      {
        titulo: "Secure data transmission in cloud computing using a cyber-security trust model with multi-risk protection scheme in smart IOT application",
        autores: "Kamble, T., Ghuge, M., Jain, R., & Bodade, V. S",
        año: 2024,
        palabrasClave: "Cloud computing,Cyber-security trust model,Multi-risk protection scheme,Multi-factor authentication,Role-based access control (RBAC) and encryption time",
        url: "https://doi.org/10.1007/s10586-024-04847-z",
        citaApa:"Kamble, T., Ghuge, M., Jain, R., & Bodade, V. S. (2024). Secure data transmission in cloud computing using a cyber-security trust model with multi-risk protection scheme in smart IOT application. Cluster Computing, 28(2). https://doi.org/10.1007/s10586-024-04847-z"
      },
      {
        titulo: "Strengthening cybersecurity: TestCloudIDS dataset and SparkShield algorithm for robust threat detection",
        autores: "Vashishtha, L. K., & Chatterjee, K",
        año: 2025,
        palabrasClave: "Intrusion detection,Apache spark,Big data analytics,Proactive security,TestCloudIDS,Raven storm",
        url: "https://doi.org/10.1016/j.cose.2024.104308",
        citaApa:"Vashishtha, L. K., & Chatterjee, K. (2025). Strengthening cybersecurity: TestCloudIDS dataset and SparkShield algorithm for robust threat detection. Computers & Security, 151, 104308. https://doi.org/10.1016/j.cose.2024.104308"
      },
      {
        titulo: "Detection of compromised functions in a serverless cloud environment",
        autores: "Ben-Shimol, L., Lavi, D., Klevansky, E., Brodt, O., Mimran, D., Elovici, Y., & Shabtai, A",
        año: 2024,
        palabrasClave: "Serverless computing,Anomaly detection",
        url: "https://doi.org/10.1016/j.cose.2024.104261",
        citaApa:"Ben-Shimol, L., Lavi, D., Klevansky, E., Brodt, O., Mimran, D., Elovici, Y., & Shabtai, A. (2024). Detection of compromised functions in a serverless cloud environment. Computers & Security, 150, 104261. https://doi.org/10.1016/j.cose.2024.104261"
      }
    ]
  }
];

//Mostrar info en la página
const params = new URLSearchParams(window.location.search);
const index = params.get("consulta");
const consulta = Consulta[index];

const contenedor = document.getElementById("infoConsulta");

if (consulta) {
  let html = `
    <h1>Consulta de ${consulta.estudiante}</h1>
    <p><strong>Búsqueda:</strong> ${consulta.cadenaBusqueda}</p>
    <p><strong>Base de datos:</strong> ${consulta.BD}</p>
    <p><strong>Total artículos encontrados:</strong> ${consulta.articulos}</p>
    <h2>Artículos seleccionados:</h2>
    <p> Para mas información de los articulos, dar click en el icono 🔗 </p>
    <div class="lista-articulos">
  `;

  consulta.articulosSeleccionados.forEach((art) => {
    html += `
      <div class="card-articulo">
        <h3>${art.titulo}</h3>
        <p><strong>Año:</strong> ${art.año}</p>
        <p><strong>Autores:</strong> ${art.autores}</p>
        <p><strong>Palabras clave:</strong> ${art.palabrasClave}</p>
        <p><a href="${art.url}" target="_blank">🔗 Ver artículo</a></p>
        <p><em>Cita APA:</em> ${art.citaApa}</p>
      </div>
    `;
  });

  html += `</div>`;  
  contenedor.innerHTML = html;
} else {
  contenedor.innerHTML = "<p>Consulta no encontrada</p>";
}



