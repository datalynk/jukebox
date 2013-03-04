Jukebox.UI.skins["hype"] =
{
	params:
	{
		dragdrop: false,
		playQueueNode: 'tbody',
		songNode: 'tr'
	},
	defaultTheme: 'white',
	themes: ['white', 'blue'],
	templates:
	{
		player:
'<div class="#{root} #{root}-theme-#{theme}">\
<div class="#{root}-main">\
<div class="#{root}-main-titlebar">\
<table class="#{root}-main-titlebar">\
<td class="#{root}-main-titlebar-title">\
Home made jukebox over streaming\
</td>\
<td class="#{root}-listening">\
	<div class="#{root}-listening-ico"></div>\
	<div class="#{root}-listening-count">#{listenersCount}</div>\
</td>\
<td class="#{root}-main-titlebar-refresh-button">\
	<input type="button" class="#{root}-refresh-button" value="" />\
</td>\
<td class="#{root}-main-titlebar-autorefresh-checkbox">\
	<input type="checkbox" name="#{root}-autorefresh" class="#{root}-autorefresh" checked="checked" value="autorefresh" />\
</td>\
<td class="#{root}-activity"></td>\
</table>\
</div>\
<table class="#{root}-main-current-song">\
<tr>\
	<td class="#{root}-main-current-song-cover">\
		<div class="#{root}-main-current-song-cover-wrapper">\
			<img class="#{root}-song-cover #{root}-main-current-song-cover" />\
		</div>\
	</td>\
	<td class="#{root}-main-current-song-infos">\
		<table class="#{root}-main-current-song-infos">\
			<tr>\
				<td>\
					#{currentSong}\
				</td>\
			</tr>\
			<tr>\
				<td class="#{root}-progressbar-container">\
					<p class="#{root}-song-time"></p>\
					<div class="#{root}-progressbar-wrapper">\
						<div class="#{root}-progressbar"></div>\
					</div>\
				</td>\
			</tr>\
		</table>\
	</td>\
</tr>\
</table>\
<table class="#{root}-main">\
<tr>\
	<td class="#{root}-controls">\
		<a href="javascript:;" class="#{root}-previous-button"></a>\
		<a href="javascript:;" class="#{root}-stream-play" title="#{play}"></a>\
		<a href="javascript:;" class="#{root}-stream-stop" title="#{stop}"></a>\
		<a href="javascript:;" class="#{root}-next-button"></a>\
	</td>\
	<td class="#{root}-volume">\
		<div class="#{root}-volume-ico"></div>\
		<div class="#{root}-volume-slider">\
			<div class="#{root}-volume-handle"></div>\
		</div>\
	</td>\
	<td class="#{root}-expand-collapse">\
		<a href="javascript:;" class="#{root}-expand-button"></a>\
		<a href="javascript:;" class="#{root}-collapse-button"></a>\
	</td>\
</tr>\
</table>\
</div>\
\
<div class="#{root}-playqueue">\
	<div class="#{root}-playqueue-content"></div>\
</div>\
</div>',
		song:
'<div class="#{root}-song">\
<div class="#{root}-song-title">#{title}</div>\
<div>\
	<a class="#{root}-song-artist" href="javascript:;">#{artist}</a> - \
	<a class="#{root}-song-album" href="javascript:;">#{album}</a>\
</div>\
</div>',
		playQueue: '',
		playQueueSong:
'<tr class="#{root}-playqueue-#{index}">\
<td>#{index}</td>\
<td>\
	<a href="javascript:;">#{artist}</a> - \
	<a href="javascript:;">#{album}</a> - \
	#{title}\
</td>\
<td>#{duration}</td>\
</tr>'
	}
};