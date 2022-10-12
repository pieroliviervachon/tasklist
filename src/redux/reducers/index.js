import {taskListReducer} from './taskList';
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
      title: 'Ajouter des compteur de tâches générales et complétées',
      isComplete: false,
    },
  ],
};
