// console.log("Hellow World!!!! :3")

export default function Hello(app) {
app.get('/hello', (req, res) => {
    res.send('Life is good!')
    });

}