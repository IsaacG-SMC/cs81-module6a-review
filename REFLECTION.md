--- REFLECTION ---

1. Since I've learned about classes before, some aspects of this chapter weren't too hard to grasp,
   but the prototype stuff was the sections of the textbook I had to re-read to ensure I was getting
   it all right. I understand it better in the simplified, unified example that was given to us here to
   examine.

2. 'this' refers to a Playlist instance that needed to be created. Multiple Playlist variable could be
   declared, and they'd all have access to these methods, and each time a method would be called, 'this'
   would ensure that the code is working for that specific instance's version of that property (name, songs,
   and currentSong for this code).

3. This is something I mentioned in the comments as a suggestion, but I was confused as to why the playlist
   removes the song that was played from the playlist, since that isn't behavior I'd associate with a
   playlist. I would probably give it a more appropriate name, like SongQueue, since you can queue up song
   and have it gone from the queue once played, and that behavior makes logical sense with the name. It's
   either that, or maybe have the song that's removed from the song array pushed to the end of the array,
   as though the playlist is on loop.
