export function testAction(action, args, state, actions, expectedMutations, done) {
  let count = 0
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]
    expect(mutation.type).toEqual(type)
    if (payload) {
      expect(JSON.stringify(mutation.payload)).toEqual(JSON.stringify(payload))
    }
    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  const dispatch = (actionName, param) => {
    actions[actionName]({ commit }, param)
  }

  action({ commit, state, dispatch }, ...args)

  if (expectedMutations.length === 0) {
    expect(count).toBe(0)
    done()
  }
}
