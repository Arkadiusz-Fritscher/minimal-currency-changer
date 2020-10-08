export const state = () => ({
  currencys: {
    from: {
      currency: 'Euro',
      slug: 'eur',
      value: '342.56',
      symbol: '€',
    },
    to: {
      currency: 'Norwegische Krone',
      slug: 'nok',
      value: '187.43',
      symbol: 'Kr',
    },
  },

  inputField: {
    section: 'from',
    isOpen: true,
  },
  realVh: null,
})

// -----------------
// --- MUTATIONS ---
// -----------------
export const mutations = {
  openInputField(state, area) {
    if (area.value === 'from') {
      state.inputField.section = area.value
    } else if (area.value === 'to') {
      state.inputField.section = area.value
    }
    state.inputField.isOpen = true
  },

  closeInputField(state) {
    state.inputField.isOpen = false
  },

  setRealVh(state, height) {
    state.realVh = height
  },
}

// ---------------
// --- ACTIONS ---
// ---------------
export const actions = {
  openInputField({ commit }, area) {
    commit('openInputField', area)
  },
  closeInputField({ commit }) {
    commit('closeInputField')
  },
  setRealVh({ commit }, height) {
    commit('setRealVh', height)
  },
}

// ---------------
// --- GETTERS ---
// ---------------
export const getters = {
  userCurrencys(state) {
    return state.currencys
  },

  isInputFieldOpen(state) {
    return state.inputField.isOpen
  },

  inputFieldSection(state) {
    return state.inputField.section
  },

  getRealVh(state) {
    return state.realVh
  },
}
