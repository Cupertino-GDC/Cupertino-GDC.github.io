var STATUS_CONFIG = {
    broken: { icon: 'fa-times-circle',        cls: 'lesson-status-broken', title: 'Confirmed non-functional' },
    recent: { icon: 'fa-check-circle',         cls: 'lesson-status-recent', title: 'Recently created or updated' },
    stale:  { icon: 'fa-exclamation-triangle', cls: 'lesson-status-stale',  title: 'Not verified in over a year' },
    ok:     { icon: 'fa-check-circle-o',       cls: 'lesson-status-ok',     title: 'No issues' }
};

function getLessonStatus(lesson) {
    if (lesson.broken) return 'broken';

    var now = new Date();
    var oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    var oneYearAgo  = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());

    var created  = lesson.createdDate  ? new Date(lesson.createdDate)  : null;
    var updated  = lesson.updatedDate  ? new Date(lesson.updatedDate)  : null;
    var verified = lesson.lastVerifiedDate ? new Date(lesson.lastVerifiedDate) : null;

    if ((created && created >= oneMonthAgo) || (updated && updated >= oneMonthAgo)) return 'recent';
    if (verified && verified < oneYearAgo) return 'stale';
    return 'ok';
}

document.addEventListener('DOMContentLoaded', function () {
    loadLessons();
});

async function loadLessons() {
    var container = document.getElementById('lessons-div');

    try {
        var data = await fetchLessonsJson('data/lessons.json');
        renderLessons(container, data);
    } catch (error) {
        console.error(error);
        container.innerHTML = '<p style="color:white;text-align:center;">Unable to load lessons right now.</p>';
    }
}

async function fetchLessonsJson(url) {
    var response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to load ' + url + ' (' + response.status + ')');
    }

    return response.json();
}

function renderLessons(container, data) {
    container.innerHTML = '';

    var topSpacer = document.createElement('br');
    container.appendChild(topSpacer);
    container.appendChild(document.createElement('br'));

    data.rows.forEach(function (row, rowIndex) {
        if (rowIndex > 0) {
            container.appendChild(document.createElement('br'));
            container.appendChild(document.createElement('br'));
            container.appendChild(document.createElement('br'));
        }

        row.forEach(function (col) {
            container.appendChild(buildColumn(col));
        });
    });

    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
}

function buildColumn(col) {
    var div = document.createElement('div');
    var classes = ['lessons-col'];

    if (col.right) classes.push('right');
    col.extraClasses.forEach(function (c) { if (c) classes.push(c); });

    div.className = classes.join(' ');

    var title = document.createElement('h1');
    title.className = 'lessons-col-title';
    title.textContent = col.title;
    div.appendChild(title);

    col.lessons.forEach(function (lesson) {
        div.appendChild(buildLesson(lesson));
    });

    return div;
}

function buildLesson(lesson) {
    var lessonRow = document.createElement('div');
    lessonRow.className = 'lesson-row';

    var wrapper = document.createElement('div');
    wrapper.className = 'lesson';
    wrapper.addEventListener('click', function () {
        clickLesson(wrapper);
    });

    var header = document.createElement('div');
    header.className = 'lesson-header';

    var headerText = document.createElement('h1');
    headerText.className = 'lesson-header-text';
    headerText.textContent = lesson.title;
    header.appendChild(headerText);

    var info = document.createElement('div');
    info.className = 'lesson-info';

    if (lesson.time) {
        var timeEl = document.createElement('h3');
        timeEl.className = 'lesson-time';
        timeEl.innerHTML = '<i class="icon fa fa-clock-o"></i> ' + lesson.time;
        info.appendChild(timeEl);
    }

    lesson.parts.forEach(function (part) {
        if (part.desc) {
            var desc = document.createElement('h4');
            desc.className = 'lesson-desc';
            desc.textContent = part.desc;
            info.appendChild(desc);
            info.appendChild(document.createElement('br'));
        }

        if (part.subtitle) {
            var subtitle = document.createElement('h3');
            subtitle.className = 'lesson-subtitle';
            subtitle.textContent = part.subtitle;
            info.appendChild(subtitle);
            info.appendChild(document.createElement('br'));
        }

        if (part.hasOwnProperty('link')) {
            var link = document.createElement('a');
            link.className = 'lesson-link';
            link.target = '_blank';
            if (part.link) link.href = part.link;
            link.innerHTML = 'Go to Lesson <i class="icon fa fa-chevron-right" style="font-weight: 100;"></i>';
            info.appendChild(link);
            info.appendChild(document.createElement('br'));
            info.appendChild(document.createElement('br'));
        }
    });

    wrapper.appendChild(header);
    wrapper.appendChild(info);

    var statusKey = getLessonStatus(lesson);
    var statusConf = STATUS_CONFIG[statusKey];
    var badge = document.createElement('span');
    badge.className = 'lesson-status-badge ' + statusConf.cls;
    badge.title = statusConf.title;
    badge.innerHTML = '<i class="fa ' + statusConf.icon + '" aria-hidden="true"></i>';

    lessonRow.appendChild(wrapper);
    lessonRow.appendChild(badge);
    return lessonRow;
}
