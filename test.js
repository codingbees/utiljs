import rq from './requestAnimation.js'

rq(() => {
    console.log('a');
}, 2000)