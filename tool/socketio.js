let mssqldb = require('./mssqldb')
let socketio = {};

function getSocket(server) {
    socketio.io = require('socket.io')(server);
    let io = socketio.io;
    io.on('connection',function(socket){
        console.log(socket.id+'建立链接');

        
    });
    
};
 
socketio.getSocket = getSocket;

module.exports = socketio