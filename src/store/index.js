import { createStore } from 'vuex'

export default createStore({
  state: {
    days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
  },
  getters: {
    date: state => {
      const classDate=new Date();
      const number = classDate.getDate();
      const day = `${state.days[number-1]}`;
      const month = `${state.months[classDate.getMonth()]}`;
      const date = day + " " + number + " " + month;
      return date
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
