$(document).ready(function() {
    // Remove beginning whitespace from each line on code block elements.
    // This code assumes that each code block uses only spaces as indentations.
    // It also assumes that the first non-space of the first line is the
    // normalization point.
    $('pre code').text(function(i, text) {
        const lines = text.split('\n');

        let firstLine = null;
        let firstLineIndex = -1;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].length > 0) {
                firstLine = lines[i];
                firstLineIndex = i;
                break;
            }
        }

        let firstIndex = 0;
        for (let i = 0; i < firstLine.length; i++) {
            if (firstLine.charAt(i) != ' ') {
                firstIndex = i;
                break;
            }
        }

        const newText = lines.slice(firstLineIndex).map(function(line) {
            return line.slice(firstIndex);
        }).join('\n');

        return newText;
    });

    hljs.initHighlighting();
});
