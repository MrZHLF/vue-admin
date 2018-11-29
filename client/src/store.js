import Vue from 'vue'
import Vuex from 'vuex'
// import Cookies from 'js-cookie'
Vue.use(Vuex)

const types = {
  SET_AUTHENTICATED: "SET_AUTHENTICATED",
  SET_USER:'SET_USER',
	// SET_LANGUAGE:'SET_LANGUAGE'
};

const state = {
  isAuthenticated:false,  //授权
  user:{},  //用户登录
	// 中英文
	// language: Cookies.get('language') || 'zh'
}

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  user:state => state.user,
	// language: state => state.language,
};

const mutations = {
  [types.SET_AUTHENTICATED](state,isAuthenticated) {
    if (isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    } else {
      state.isAuthenticated = false
    }
  },

  [types.SET_USER](state,user) {
    if(user) {
      state.user = user
    } else {
      state.user = {}
    }
  },
	// 中英文
/* 	SET_LANGUAGE: (state, language) => {
		state.language = language
		Cookies.set('language', language)
	}, */
}

const actions = {
  setAuthenticated({ commit }, isAuthenticated) {
    commit(types.SET_AUTHENTICATED, isAuthenticated);
  },
  setUSER({commit},user){
    commit(types.SET_USER,user)
  },
  createUser:({commit}) => {
    commit(types.SET_AUTHENTICATED,false)
    commit(types.SET_USER,null)
  },
	// 中英文
	/* setLanguage({ commit }, language) {
		commit('SET_LANGUAGE', language)
	}, */
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
