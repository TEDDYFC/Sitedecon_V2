// Listes des personnalités par utilisateur
const personnalitesEnsemble1 = [
    { 
      nom: "Alexandre", 
      description: "Alias le poisson.", 
      image: "assets/Alexandre.jpg", 
      details: "cette personne est ce qu'on pourrait qualifié de tryharder. Le mec n'a tout simplement pas de vie j'ai l'impression qu'il est le fils de Laurent il mange des Qreq et passe son temps à réviser. Bref dans le jargon on appelle ca un PD. De plus une des informations top secrete est que c'est un poisson étoilé." 
    },
    { 
      nom: "Alexian", 
      description: "Alexian, le faux génie", 
      image: "assets/alexian.jpg", 
      details: "Cette personne n'est pas un génie, il est passé à deux point de lêtre c'est dommage pour lui, il n'est pas assez intéligent comparé au créateur de ce site. Une information top secrete est que tous les matins il retrouve LIlian tous les jours à la même heure au toilette."
    },
    { 
      nom: "Lilain", 
      description: "Aucune information n'est disponible.", 
      image: "assets/Lilian.jpg", 
      details: "Cette personne est un phantome inconnu, nous suspectons qu'il est rechercher par la police, c'est pour cela qu'il a peur que des innfromations fuites sur lui.La seul information disponible c'est qu'il est pd avec Alexian( c'est eput être pour cela qu'il à peur)."
    },
    { 
      nom: "Esteban", 
      description: "Homo et non sapiens", 
      image: "assets/Lilian.jpg", 
      details: "C'est un hommo comme les autres. Il pense être inteligent cependant il l'est moins que le créateur de ce site, de plus il a eu 10/20 en histoire"
    },
    { 
      nom: "Raphaël", 
      description: "L'homosexuel originel", 
      image: "assets/rhaph.jpg", 
      details: "Très grand acteur à jouer dans les films age de glaces. C'est un hommosexuel parfait, cepandant un problème reste en suspent il à un poulet le M mais aime les hommes, la seul possibilité c'est que le poulet est trans"
    },
    { 
        nom: "Ethan ", 
        description: "Le rugbyman.", 
        image: "assets/Ethan.jpg", 
        details: "Rien à dire aurmis qu'il adore le rugby. C'est un raciste homophobe comme on les aime, le GOAT"
    }
  ];
  
  const personnalitesEnsemble2 = [
    { 
      nom: "Galilée", 
      description: "Astronome et physicien célèbre pour ses découvertes astronomiques.", 
      image: "https://via.placeholder.com/100", 
      details: "Galilée est considéré comme le père de la science moderne. Il a confirmé la théorie héliocentrique de Copernic et inventé le télescope astronomique."
    },
    { 
      nom: "Charles Darwin", 
      description: "Naturaliste à l'origine de la théorie de l'évolution.", 
      image: "https://via.placeholder.com/100", 
      details: "Charles Darwin a introduit la théorie de l'évolution par sélection naturelle dans son livre 'L'Origine des espèces' publié en 1859."
    },
    { 
      nom: "Nikola Tesla", 
      description: "Inventeur et ingénieur célèbre pour ses travaux sur le courant alternatif.", 
      image: "https://via.placeholder.com/100", 
      details: "Nikola Tesla a joué un rôle clé dans le développement des systèmes de distribution électrique à courant alternatif. Il est aussi à l'origine de nombreuses inventions en électricité."
    }
  ];
  
  // Gestion de la connexion
  const loginForm = document.getElementById("login-form");
  const loginContainer = document.getElementById("login-container");
  const mainContainer = document.getElementById("main-container");
  const errorMessage = document.getElementById("error-message");
  
  // Identifiants autorisés
  const validCredentials = {
    user1: { username: "admin1", password: "1234", personnalites: personnalitesEnsemble1 },
    user2: { username: "admin2", password: "5678", personnalites: personnalitesEnsemble2 },
  };
  
  // Stockage des personnalités pour l'utilisateur connecté
  let personnalitesActuelles = [];
  
  // Gestion de l'événement de connexion
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Vérifier les identifiants
    if (username === validCredentials.user1.username && password === validCredentials.user1.password) {
      personnalitesActuelles = validCredentials.user1.personnalites;
      ouvrirPagePrincipale();
    } else if (username === validCredentials.user2.username && password === validCredentials.user2.password) {
      personnalitesActuelles = validCredentials.user2.personnalites;
      ouvrirPagePrincipale();
    } else {
      errorMessage.textContent = "Identifiant ou mot de passe incorrect.";
    }
  });
  
  // Fonction pour ouvrir la page principale
  function ouvrirPagePrincipale() {
    loginContainer.classList.add("hidden");
    mainContainer.classList.remove("hidden");
    afficherToutesLesPersonnalites();
  }
  
  // Afficher toutes les personnalités
  const listContainer = document.getElementById("list-container");
  
  function afficherToutesLesPersonnalites() {
    listContainer.innerHTML = "";
  
    personnalitesActuelles.forEach((personne, index) => {
      const card = document.createElement("div");
      card.className = "personnalite-card";
      card.innerHTML = `
        <img src="${personne.image}" alt="${personne.nom}">
        <h3>${personne.nom}</h3>
        <p>${personne.description}</p>
      `;
  
      // Ajout d'un événement pour ouvrir la page dédiée
      card.addEventListener("click", () => ouvrirPageDediee(personne));
      listContainer.appendChild(card);
    });
  }
  
  // Ouvrir une page dédiée à une personnalité
  function ouvrirPageDediee(personne) {
    // Nettoyer la page actuelle et afficher les détails de la personnalité
    document.body.innerHTML = `
      <div id="dedicated-page">
        <header>
          <h1>${personne.nom}</h1>
        </header>
        <main>
          <img src="${personne.image}" alt="${personne.nom}">
          <p>${personne.details}</p>
          <button id="retour-btn">Retour</button>
        </main>
      </div>
    `;
  
    // Bouton pour retourner à la liste
    const retourBtn = document.getElementById("retour-btn");
    retourBtn.addEventListener("click", () => location.reload());
  }
