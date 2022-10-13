import taskListReducer from './TaskListReducer';
export const reducer = {
  taskListReducer,
};

export const preloadState = {
  taskList: [
    {
      id: '1665539235066',
      title: "Enregistrer les tache sur l'appareil",
      isComplete: false,
    },
    {
      id: '1665539235067',
      title: 'Modifier une tâche',
      isComplete: false,
    },
    {
      id: '1665539235068',
      title: 'Ajouter des compteur de tâches générales',
      isComplete: false,
    },
    {
      id: '1665539235069',
      title: 'Ajouter des compteur de tâches complétées',
      isComplete: false,
    },
    {
      id: '1665539235070',
      title: "Ajuster l'apparence des tâches si le texte est trop long",
      isComplete: false,
    },
  ],
};
