import express from 'express'
import next from 'next'

const port = 3000

const dev = process.env.NODE_ENV !== 'production'

// creating the app either in production or dev mode 
const app = next({ dev })
const handle = app.getRequestHandler()

// running the app, async operation 
app.prepare().then(() => {
    
    const server = express()

    // redirecting all requests to Next.js 
    server.get("/api/express", (req, res) => {
        return res.send({ express: 'Hello From Express Server' });
    })

    // redirecting all requests to Next.js 
    server.all('*', (req: any, res: any) => {
        return handle(req, res)
    })

    server.listen(port, () => {
        // if (err) return err
        console.log(`Runing on port ${port}, dev: ${dev}`)
    })
})
