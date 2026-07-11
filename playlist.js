// Improvement: With the behavior of skipSong removing songs from the Playlist, the
// class does not behave like an actual playlist, but more like a queue, and it would make
// more sense to rename it such
function Playlist(name) {
  this.name = name; // Playlist object's name is determined by a parameter when created
  this.songs = [];  // Playlist object's songs array is declared for future use, but currently empty
  this.currentSong = null;  // Playlist object's currentSong pointer points to null upon creation
}

// Every use of this in the following methods refers to a Playlist instance that is calling
// the given method

// Adds a song to a Playlist
// Takes in a string songTitle, and function puts that string as the last element in an
// object's songs array
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle); // push songTitle to end of songs array of a Playlist object
};

// If a playlist has songs queued up, has the currentSong play the first song on the playlist
// and prints to console what's being played
// Takes in no parameters, prints currentSong if it exists
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {  // Checks that songs array is not empty
    this.currentSong = this.songs[0]; // currentSong points to start of songs array
    console.log("Now playing:", this.currentSong);  // prints out currentSong
  } // Improvement: have this function print something when this.songs.length !> 0,
  //  so we can see the function work when called even if a playlist has no songs added to it
};

//  Skips the current song played to the next song on the playlist
//  No parameters, removes the first song on the playlist and shifts the elements of the
//  songs array to accommodate. currentSongs is updated to the new front of the songs array
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {  // checks that playlist's songs array has at least 2 elements
    this.songs.shift(); // remove first element of a songs array, all elements left in array
                        // move one left (so only element 1 is now element 0, ect)
    this.currentSong = this.songs[0]; // currentSong points to new front of songs array
    console.log("Skipped! Now playing:", this.currentSong); // prints out new currentSong
  } else {   // If one or zero elements in a Playlist's songs array...
    console.log("No more songs to skip.");  //... print out that there are no songs to skip [to]
  }
};

// Prints out the songs in a playlist
// No parameters, and prints out the name of the playlist and all songs in its songs array
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);  // retrieves a Playlist's name to print
  console.log("Songs:", this.songs.join(", ")); // retrieves a Playlist's songs array to print
};

// Adds song to the front of the playlist queue, and if currently playing a song,
// starts playing the song just added
// Takes in a songTitle string, and adds it to the front of a Playlist's songs array
// If currentSong is pointing to a song already, then play the new front of songs array
// by calling this Playlist's playFirst method
Playlist.prototype.addToFront = function(songTitle) {
  if(this.songs.length > 0){  // If songs array is not empty...
    this.songs.unshift(songTitle);  // ...add songTitle to front of songs array and shift
                                    // existing elements to the right by 1
    if(this.currentSong != null){ // If a song is currently being played...
      this.playFirst(); // ...call this instance's playFirst to play new front of songs array
    }
  } else {  // Else, playlist songs is empty,
    this.addSong(songTitle);  // so we can just add the song to the playlist normally
  }
}

let myMix = new Playlist("My Chill Mix"); // creates new instance of a Playlist object
myMix.addSong("Lofi Study");  // myMix.songs[0] = "Lofi Study"
myMix.addSong("Chillhop Beats");  // myMix.songs[1] = "Chillhop Beats"
myMix.addSong("Evening Jazz");  // myMix.songs[2] = "Evening Jazz"
myMix.playFirst();  // "Now playing: Lofi Study"
myMix.skipSong();   // Skipped! Now playing: Chillhop Beats
myMix.listSongs();  // Playlist: My Chill Mix
                    // Songs: Chillhop Beats, Evening Jazz
myMix.addToFront("Hello Polaris");  // myMix.songs [0] = "Hello Polaris"
                                             //Now playing: Hello Polaris
myMix.listSongs();  // Playlist: My Chill Mix
                    // Songs: Hello Polaris, Chillhop Beats, Evening Jazz

  
