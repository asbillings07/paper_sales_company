const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3005
const host = '0.0.0.0'

const whitelist = ['http://localhost:3000', 'http://localhost:8090']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors({ credentials: true, origin: corsOptions }))

let data = {
  customers: [
    {
      id: 1,
      name: 'Angela Martin',
      email: 'angela@customeremail.com'
    },
    {
      id: 2,
      name: 'Andy Bernard',
      email: 'andy@customeremail.com'
    }
  ],
  agents: [
    {
      id: 3,
      name: 'Creed Bratton',
      email: 'creed@dundermifflin.com'
    },
    {
      id: 4,
      name: 'Kevin Malone',
      email: 'kevin@dundermifflin.com'
    }
  ],
  interactions: [
    {
      id: 1,
      title: 'Want printer paper',
      customerId: 2,
      messages: [
        {
          id: 10,
          type: 'customer_message',
          content: 'Hi how are you'
        },
        {
          id: 11,
          type: 'agent_message',
          agentId: 3,
          content: 'Hi there, is there anything we can do for you today'
        },
        {
          id: 12,
          type: 'customer_message',
          agentId: 3,
          content: 'Yes please I am looking to get printer paper'
        }
      ],
      notes: [
        {
          id: 100,
          agentId: 3,
          content: 'This customer wants to print something I am sure'
        }
      ]
    },
    {
      id: 2,
      customerId: 1,
      title: 'Looking for business card paper',
      messages: [
        {
          id: 20,
          type: 'customer_message',
          content: 'Good morning, I need some help please'
        },
        {
          id: 21,
          type: 'agent_message',
          agentId: 4,
          content: 'Good morning. Sure, I can gladly help. How can I help you'
        },
        {
          id: 22,
          type: 'customer_message',
          content: 'My business card paper order is running late, has it been shipped?'
        }
      ],
      notes: [
        {
          id: 200,
          agentId: 4,
          content: 'I was going to interact with this customer but I am going to go have lunch'
        },
        {
          id: 201,
          agentId: 4,
          content: 'I am back from lunch, I can take it from here'
        }
      ]
    }
  ]
}

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to the DunderMifflin Server')
})

app.get('/api/customers', (req, res) => {
  res.send(data.customers)
})

app.get('/api/agents', (req, res) => {
  res.send(data.agents)
})

app.get('/api/interactions', (req, res) => {
  res.send(data.interactions)
})

app.get('/api/interactions/:id', (req, res) => {
  let id = parseInt(req.params.id)
  let interactionFound = false
  data.interactions.forEach((interaction) => {
    if (interaction.id == id) {
      interactionFound = true
      res.send(interaction)
    }
  })
  if (!interactionFound) res.status(404).send('Interaction not found')
})

app.post('/api/interactions/:id/messages', (req, res) => {
  let payload = req.body
  let newMessage = {}
  newMessage.id = Math.floor(Math.random() * Math.floor(100000))
  newMessage.content = payload.content
  newMessage.type = payload.type
  if (newMessage.type != 'customer_message' && newMessage.type != 'agent_message') {
    throw Error("Malformed message. Type must be either 'customer_message' or 'agent_message'")
  }
  if (newMessage.type == 'agent_message') {
    newMessage.agentId = payload.agentId
  }

  let id = parseInt(req.params.id)
  let interactionFound = false
  data.interactions.forEach((interaction) => {
    if (interaction.id == id) {
      interactionFound = true
      interaction.messages.push(newMessage)
      res.send(interaction)
    }
  })
  if (!interactionFound) res.status(404).send('Interaction not found')
})

app.post('/api/interactions/:id/notes', (req, res) => {
  const { agentId, content } = req.body
  let newNote = {}
  newNote.id = Math.floor(Math.random() * Math.floor(100000))
  newNote.agentId = agentId
  newNote.content = content

  let id = parseInt(req.params.id)
  let interactionFound = false
  data.interactions.forEach((interaction) => {
    if (interaction.id == id) {
      interactionFound = true
      interaction.notes.push(newNote)
      res.send(interaction)
    }
  })
  if (!interactionFound) res.status(404).send('Interaction not found')
})

// Edit Note
app.put('/api/interactions/:id/notes', (req, res) => {
  const { agentId, content, noteId } = req.body
  let newNote = {}
  newNote.id = noteId
  newNote.agentId = agentId
  newNote.content = content

  let id = parseInt(req.params.id)
  let interactionFound = false
  data.interactions.forEach((interaction) => {
    if (interaction.id == id) {
      interactionFound = true
      const newNotes = interaction.notes.filter((note) => note.id !== noteId)
      newNotes.push(newNote)
      interaction.notes = newNotes
      res.send(interaction)
    }
  })
  if (!interactionFound) res.sendStatus(404).send('Interaction not found')
})
// Delete Note
app.delete('/api/interactions/:id/notes', (req, res) => {
  const { noteId } = req.body

  let id = parseInt(req.params.id)
  let interactionFound = false
  data.interactions.forEach((interaction) => {
    if (interaction.id == id) {
      interactionFound = true
      const newNotes = interaction.notes.filter((note) => note.id !== noteId)
      interaction.notes = newNotes
      res.send(interaction)
    }
  })
  if (!interactionFound) res.sendStatus(404).send('Interaction not found')
})

app.listen(port, () => {
  console.log(`listening at http://${host}:${port}`)
})
