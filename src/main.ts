import { ChatGPTBot } from './bot.js'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

const chatGPTBot = new ChatGPTBot()

async function main() {
	await chatGPTBot.startGPTBot()
	app.get('/', (req, res) => {
		res.end('hello world')
	})
	app.post('/send', (req, res) => {
		const data = req.body
		const message = data.message
		console.log(message, data)
		if (!chatGPTBot.ready) {
			return
		}
		if (message.startsWith('/ping')) {
			res.send('pong')
			return
		}
		try {
			console.log(`Message: ${message}`)

			chatGPTBot.onMessage(data).then(rest => {
				console.log(rest)
				res.send(rest)
			})
		} catch (e) {
			console.error(e)
		}
	})
	app.listen('7001', () => {
		console.log('listen at 7001')
	})
}

main()
