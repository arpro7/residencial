import router from "@/router";
import { nanoid } from "nanoid";

export const state = {
  accesscontrols: [],
  accesscontrol: {
    val1 : "",     // id
    val2 : "",     // visitor_name
    val3 : "",     // house_owner
    val4 : "",     // id_house
    val5 : "",     // purpose
    val6 : "",     // star_date
    val7 : "",     // end_date
    val8 : "",     // car_serie
    val9 : "",     // ife_serie
    val10 : ""     // estatus
  },
};

export const getters = {};

export const mutations = {
  cargar(state, payload) {
    state.accesscontrols = payload;
  },
  //POST
  set(state, payload) {
    state.accesscontrols.push(payload);
  },
  //DELETE
  delete(state, payload) {
    state.accesscontrols = state.accesscontrols.filter((item) => item.id !== payload);
  },
  //GET
  accesscontrol(state, payload) {
    if (!state.accesscontrols.find((item) => item.id === payload)) {
      router.push("/");
      return;
    }
    state.accesscontrol = state.accesscontrols.find((item) => item.id === payload);
  },
  //UPDATE
  update(state, payload) {
    state.accesscontrols = state.accesscontrols.map((item) => (item.id === payload.id ? payload : item));
  },
  //FILTER
  filter(state, payload) {
    state.filterAccesscontrols = payload;
  },
};

export const actions = {
  //LEER
  async getAccesscontrols({ commit }) {
    try {
      const res = await fetch("https://arprobackend-default-rtdb.firebaseio.com/accesscontrols-api.json");
      const dataDB = await res.json();
      const arrayAccesscontrols = [];
      for (let id in dataDB) {
        arrayAccesscontrols.push(dataDB[id]);
      }
      commit("cargar", arrayAccesscontrols);
    } catch (error) {
      console.log(error);
    }
  },
  //POST
  async setAccesscontrols({ commit }, accesscontrol) {
    try {
      await fetch(`https://arprobackend-default-rtdb.firebaseio.com/accesscontrols-api/${accesscontrol.val1}.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(accesscontrol),
      });
    } catch (error) {
      console.log(error);
    }
    commit("set", accesscontrol);
  },
  //POST MAP
  async setAccesscontrolss({ commit }, accesscontrol) {
    await accesscontrol.map(item => {
      try {
         fetch(`https://arprobackend-default-rtdb.firebaseio.com/accesscontrols-api/${nanoid()}.json`, {
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
  async deleteAccesscontrols({ commit }, id) {
    try {
      await fetch(`https://arprobackend-default-rtdb.firebaseio.com/accesscontrols-api/${id}.json`, {
        method: "DELETE",
      });
      commit("delete", id);
    } catch (error) {
      console.log(error);
    }
  },
  //GET
  setAccesscontrol({ commit }, id) {
    commit("accesscontrol", id);
  },
  //UPDATE
  async updateAccesscontrol({ commit }, accesscontrol) {
    try {
      const res = await fetch(`https://arprobackend-default-rtdb.firebaseio.com/accesscontrols-api/${accesscontrol.id}.json`, {
        method: "PATCH",
        body: JSON.stringify(accesscontrol),
      });
      const dataDB = await res.json();
      commit("update", dataDB);
    } catch (error) {
      console.log(error);
    }
  },
  //FILTRAR
  filterAccesscontrols({ commit, state }, name) {
    const filtro = state.accesscontrols.filter((accesscontrols) => {
      let nombreApi = accesscontrols.name.toLowerCase();
      let nombreInput = name.toLowerCase();
      if (nombreApi.includes(nombreInput)) {
        return accesscontrols;
      }
    });
    // console.log(filtro)
    commit("filter", filtro);
  },
};
