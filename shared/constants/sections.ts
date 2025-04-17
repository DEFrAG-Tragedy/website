export const SectionsName = {
    OPERE: 'OPERE',
  //  APPARATO: 'APPARATO',
   // COMMENTO: 'COMMENTO',
  //  TRADUZIONE: 'TRADUZIONE',
};

export const links = reactive([
    { value: 'home', to: '/', icon: 'fas fa-building-columns', hasSubmenu: false, disabled: false},
    { value: 'project', to: '/progetto', icon: 'fas fa-diagram-project', hasSubmenu: false, disabled: false},
    { value: 'research', to: '/gruppo-di-ricerca', icon: 'fas fa-users', hasSubmenu: false, disabled: false },
    { value: 'committee', to: '/comitato-scientifico', icon: 'fas fa-book', hasSubmenu: false, disabled: false},
    { value: 'collaborators', to: '/collaboratori', icon: 'fas fa-handshake', hasSubmenu: false, disabled: false},
    { value: 'developmentTeam', to: '/team-sviluppo', icon: 'fas fa-handshake', hasSubmenu: false, disabled: false},
    { value: 'contacts', to: '/contatti', icon: 'fas fa-users', hasSubmenu: false, disabled: false},
]);