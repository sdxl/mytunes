// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('ended', this.playNext, this);
    this.on('dequeue', this.dequeue, this);
  },

  playNext: function(){
    this.shift();
    if(this.length>0){
      this.playFirst();
    }
  },

  playFirst: function(){
     if(this.at(0) !== this.get('currentSong')){
       this.at(0).play();
     }
  },

  enqueue: function() {
    // this.add(song);
    if (this.at(0) === undefined) {
      this.playFirst();
    }
  },

  dequeue: function(){
    if(this.at(0)===song){
      this.playNext();
    }else{
      this.remove(song);
    }

  }

});
