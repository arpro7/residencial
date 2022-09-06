import router from "@/router";
import { nanoid } from "nanoid";

export const state = {
  companies: [],
  companie: {
    id: "",
    name: "",
    owner: "",
    industry_type: "",
    star_value: "",
    location: "",
    employee: "",
    website: "",
    contact_email: "",
    since: "",
    image_src: "",
  },
};

export const getters = {};

export const mutations = {
  cargar(state, payload) {
    state.companies = payload;
  },
  //POST
  set(state, payload) {
    state.companies.push(payload);
  },
  //DELETE
  delete(state, payload) {
    state.companies = state.companies.filter((item) => item.id !== payload);
  },
  //GET
  companie(state, payload) {
    if (!state.companies.find((item) => item.id === payload)) {
      router.push("/");
      return;
    }
    state.companie = state.companies.find((item) => item.id === payload);
  },
  //UPDATE
  update(state, payload) {
    state.companies = state.companies.map((item) => (item.id === payload.id ? payload : item));
  },
  //FILTER
  filter(state, payload) {
    state.filterCompanies = payload;
  },
};

export const actions = {
  //LEER
  async getCompanies({ commit }) {
    try {
      const res = await fetch("https://arprobackend-default-rtdb.firebaseio.com/companies-api.json");
      const dataDB = await res.json();
      const arrayCompanies = [];
      for (let id in dataDB) {
        arrayCompanies.push(dataDB[id]);
      }
      commit("cargar", arrayCompanies);
    } catch (error) {
      console.log(error);
    }
  },
  //POST
  async setCompanies({ commit }, companie) {
    try {
      await fetch(`https://arprobackend-default-rtdb.firebaseio.com/companies-api/${companie.id}.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companie),
      });
    } catch (error) {
      console.log(error);
    }
    commit("set", companie);
  },
  //POST MAP
  async setCompaniess({ commit }, companie) {
    await companie.map(item => {
      try {
         fetch(`https://arprobackend-default-rtdb.firebaseio.com/companies-api/${nanoid()}.json`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });
      } catch (error) {
        console.log(error);
      }
      commit("set", item);
    })
  },
  //DELETE
  async deleteCompanies({ commit }, id) {
    try {
      await fetch(`https://arprobackend-default-rtdb.firebaseio.com/companies-api/${id}.json`, {
        method: "DELETE",
      });
      commit("delete", id);
    } catch (error) {
      console.log(error);
    }
  },
  //GET
  setCompanie({ commit }, id) {
    commit("companie", id);
  },
  //UPDATE
  async updateCompanie({ commit }, companie) {
    try {
      const res = await fetch(`https://arprobackend-default-rtdb.firebaseio.com/companies-api/${companie.id}.json`, {
        method: "PATCH",
        body: JSON.stringify(companie),
      });
      const dataDB = await res.json();
      commit("update", dataDB);
    } catch (error) {
      console.log(error);
    }
  },
  //FILTRAR
  filterCompanies({ commit, state }, name) {
    const filtro = state.companies.filter((companies) => {
      let nombreApi = companies.name.toLowerCase();
      let nombreInput = name.toLowerCase();
      if (nombreApi.includes(nombreInput)) {
        return companies;
      }
    });
    // console.log(filtro)
    commit("filter", filtro);
  },
};
