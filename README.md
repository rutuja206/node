STREAMS:
Streams in Node.js are like pipes that help move data from one place to another in small chunks, instead of loading everything at once.
For example, when you watch a video online, you don’t wait for the whole file to download—you see it in parts as it comes.
Streams work the same way for reading or writing files, sending data over the internet, or processing big amounts of information. This makes apps faster and saves memory.

The readStream.readableFlowing property in Node.js tells you whether a readable stream is currently flowing or not.
If it’s null, the stream has not started yet.
If it’s true, the stream is in flowing mode (data is being read automatically as fast as possible).
If it’s false, the stream is in paused mode (you need to call .read() manually or use events like data).
