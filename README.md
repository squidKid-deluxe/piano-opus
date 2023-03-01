# Piano Opus

A collection of some of my piano performances.

## MP3 Files:

Recorded with Yamaha P125 and Guvcview; converted to mp3 with ffmpeg.

### Metadata:
 - Stream #0:0: Audio: mp3 (libmp3lame), 44100 Hz, stereo, fltp
 - encoder         : Lavc58.54.100 libmp3lame

## Piano roll videos:

Recorded with Yamaha P125 Piano.

[Rosegarden](https://rosegardenmusic.com/) records MIDI; [Guvcview](https://github.com/troxor/guvcview) records audio.

MIDI files are run through [MIDIVisualizer](https://github.com/kosua20/MIDIVisualizer) to create visualization

Then audio and video, which are seperate at this point because MIDIVisualizer has no sound, are passed through ffmpeg which:

 - Re-encodes both audio and video
 
 - adds both audio and video to the same file
 
 - exports into `webm` format, which is highly compressed
 
i.e.:

```
ffmpeg -i "Sunshine of Your Love.wav" -i "Sunshine of Your Love.mp4" "Sunshine of Your Love (w audio).webm"
```

