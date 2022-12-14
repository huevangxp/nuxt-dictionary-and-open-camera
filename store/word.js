export const state = () => ({
    word:{}
})

export const mutations = {
    setWord(state, data) {
        state.word = data
    }
}

export const actions = {
    async getWord({ commit }, params) {
        // console.log({params})
        await this.$axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${params}` )
            .then((data) => {
            // console.log(data);
                commit('setWord', data.data[0])
        })
    }
}