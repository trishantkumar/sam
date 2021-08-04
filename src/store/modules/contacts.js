import axios from 'axios';

const resource_uri = "https://reqres.in/api/users/";

const state = {
    contacts: [],
    contact: []
};

const getters = {
    allContacts: state => state.contacts,
    userContact: state => state.contact
};

const actions = {
    async fetchContacts({ commit }) {
        const response = await axios.get(resource_uri);
        commit('setContacts', response.data.data);
    },
    async getUserData( { commit }, contact) {
        const response = await axios.get(`${resource_uri}${contact}`);
        commit('getUserData', response.data);
    },
};

const mutations = {
    setContacts: (state, contacts) => state.contacts = contacts,
    getUserData: (state, contact) => state.contact = contact
};

export default {
    state, getters, actions, mutations
}