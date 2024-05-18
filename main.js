
jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'play',
                'progress',
                'duration',
                'mute',
                'volume',
                'download',
            ]
        });
        // initialize playlist and controls
        var index = 0,
            playing = false,
            tracks = [
                "90s Dance Mix --- Take On Me - Insomnia - Blue - Rhythm Is a Dancer - Better Off Alone",
                "Arabesque",
                "Bad Apple",
                "Beethoven Virus",
                "Crazy Train",
                "Dream On",
                "Eiffel 65 - Blue",
                "Eight Days A Week",
                "Enter Sandman",
                "Haddaway - What is Love",
                "In the Hall of the Mountain King",
                "Italian Tunes",
                "Maple Leaf Rag",
                "March of the Wooden Soldiers",
                "March on Android Moon",
                "Megalovainia",
                "Minuet in G",
                "Mozart Sonata K545",
                "Pineapple Rag",
                "Rush E",
                "Smoke On The Water",
                "Snippets --- ATC - All Around the World; Eurythmics - Sweet Dreams; Initial D - Running in the 90s",
                "Still DRE",
                "Sugar Plum Fairy",
                "Sunshine of Your Love",
                "Sweet Caroline",
                "Sweet Home Alabama",
                "Tetris",
                "The Adams Family",
                "The Entertainer",
                "The Final Countdown",
                "The Wellerman",
                "Turkish March (Beethoven)",
                "White Clouds"
            ],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = key+1,
                    trackName = value;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum"></span> \
                        <span class="plTitle">' + trackName + '</span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
                document.getElementById("pageTitle").innerHTML = "squidKid-deluxe's Piano Opus (playing " + tracks[index] + ")"
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
                document.getElementById("pageTitle").innerHTML = "squidKid-deluxe's Piano Opus"
            }).on('ended', function () {
                npAction.text('Paused...');
                document.getElementById("pageTitle").innerHTML = "squidKid-deluxe's Piano Opus"
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id]);
                index = id;
                audio.src = tracks[id] + ".mp3";
                updateDownload(id, audio.src);
            },
            updateDownload = function (id, source) {
                player.on('loadedmetadata', function () {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        loadTrack(index);
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});
