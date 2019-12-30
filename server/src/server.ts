import * as http from 'http';
import app from './app';

const port = process.env.PORT || 8998;

app.listen(port, () => {
    // err && console.log(err);
    return console.log(`server is running on ${port}`);
})

export default app;
