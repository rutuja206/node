STREAMS:
Streams in Node.js are like pipes that help move data from one place to another in small chunks, instead of loading everything at once.
For example, when you watch a video online, you don’t wait for the whole file to download—you see it in parts as it comes.
Streams work the same way for reading or writing files, sending data over the internet, or processing big amounts of information. This makes apps faster and saves memory.

The readStream.readableFlowing property in Node.js tells you whether a readable stream is currently flowing or not.
If it’s null, the stream has not started yet.
If it’s true, the stream is in flowing mode (data is being read automatically as fast as possible).
If it’s false, the stream is in paused mode (you need to call .read() manually or use events like data).

| Concept / Event / Method   | Meaning (Simple)                                                                | Example Use in Real Apps                              |
| -------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **Streams**                | Handle data piece by piece instead of loading all at once.                      | Watching Netflix without downloading the whole movie. |
| **`readableFlowing`**      | Shows if stream is flowing (`true`), paused (`false`), or not started (`null`). | Debugging data flow.                                  |
| **`highWaterMark`**        | Buffer size (how much data is read/written at a time).                          | `{ highWaterMark: 4 }` → process in 4-byte chunks.    |
| **`readable.read()`**      | Manual way to pull data from buffer (paused mode).                              | Fine-grained control over file parsing.               |
| **`readStream.destroy()`** | Stops stream immediately and frees resources.                                   | Cancel a download when a user quits.                  |
| **`error` event**          | Fires when something goes wrong (e.g., missing file, network issue).            | Logging + retrying in enterprise apps.                |
| **`open` event**           | Fired when file descriptor (FD) is opened and ready.                            | Confirm file is ready before reading/writing.         |
| **`ready` event**          | Stream is prepared and ready to be used (even if `open` hasn’t fired yet).      | Helpful for non-file streams (like network).          |

