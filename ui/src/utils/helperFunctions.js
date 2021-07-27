export const findById = (id, array) => {
  return array.filter((data) => data.id == id)[0]
}

export const messageReducer = (type, object, agentId, customerId) => {
  switch (type) {
    case 'agent_message':
      return findById(agentId, object.agents)
    case 'customer_message':
      return findById(customerId, object.customers)
  }
}
