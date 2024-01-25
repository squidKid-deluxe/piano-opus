# Piano Opus

A collection of some of my piano performances.

## MP3 Files:

Recorded with Yamaha P125 and either Guvcview or Audacity.
When Guvcview was used, I converted to mp3 with ffmpeg.

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

### Metadata:

 - encoder         : Lavf58.29.100
 - Stream #0:0(und): Video: vp9 (libvpx-vp9), yuv420p(progressive), 1920x1080 [SAR 1:1 DAR 16:9], q=-1--1, 200 kb/s, 30 fps, 1k tbn, 30 tbc (default)
 - Metadata:
 - - handler_name    : VideoHandler
 - - encoder         : Lavc58.54.100 libvpx-vp9
 - Side data:
 - - cpb: bitrate max/min/avg: 0/0/0 buffer size: 0 vbv_delay: -1
 - Stream #0:1: Audio: opus (libopus), 48000 Hz, stereo, s16, 96 kb/s
 - Metadata:
 - - encoder         : Lavc58.54.100 libopus



