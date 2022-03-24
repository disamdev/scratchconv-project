var errorsTextarea = document.getElementById('errors')
if (!window.onNewError) {
    window.onNewError = function () {
        errorsTextarea.value =
            window.errors.length +
            ' error(s)\n' +
            window.errors.join('\n')
    }
    window.onNewError()
}
try {
    eval('0 ?? 0')
} catch (_) {
    var oldBrowserNotice = document.getElementById(
        'no-nullish-coalescing'
    )
    oldBrowserNotice.className = ''
}
var hasJs = document.getElementById('js-enabled')
if (hasJs) {
    hasJs.classList.remove('hidden')
}